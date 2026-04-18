<template>
  <div class="main-content">
    <breadcumb :page="$t('EditSale')" :folder="$t('ListSales')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <validation-observer ref="edit_sale" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Sale">
        <b-row>
          <b-col lg="12" md="12" sm="12">
            <b-card>
              <b-row>

                <b-modal hide-footer id="open_scan" size="md" title="Barcode Scanner">
                  <qrcode-scanner
                    :qrbox="250" 
                    :fps="10" 
                    style="width: 100%; height: calc(100vh - 56px);"
                    @result="onScan"
                  />
                </b-modal>

                 <!-- date  -->
                <b-col lg="4" md="4" sm="12" class="mb-3">
                  <validation-provider
                    name="date"
                    :rules="{ required: true}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('date') + ' ' + '*'">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="date-feedback"
                        type="date"
                        v-model="sale.date"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="OrderTax-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
                <!-- Customer -->
                <b-col lg="4" md="4" sm="12" class="mb-3">
                  <validation-provider name="Customer" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Customer') + ' ' + '*'">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="sale.client_id"
                        disabled
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Customer')"
                        :options="clients.map(clients => ({label: clients.name, value: clients.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- warehouse -->
                <b-col lg="4" md="4" sm="12" class="mb-3">
                  <validation-provider name="warehouse" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('warehouse') + ' ' + '*'">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        :disabled="details.length > 0"
                        @input="Selected_Warehouse"
                        v-model="sale.warehouse_id"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Warehouse')"
                        :options="warehouses.map(warehouses => ({label: warehouses.name, value: warehouses.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                  <!-- Product -->
                <b-col md="12" class="mb-5">
                  <h6>{{$t('ProductName')}}</h6>
                 
                  <div id="autocomplete" class="autocomplete">
                    <div class="input-with-icon">
                      <img src="/assets_setup/scan.png" alt="Scan" class="scan-icon" @click="showModal">
                    <input 
                     :placeholder="$t('Scan_Search_Product_by_Code_Name')"
                       @input='e => search_input = e.target.value' 
                      @keyup="search(search_input)"
                      @focus="handleFocus"
                      @blur="handleBlur"
                      ref="product_autocomplete"
                      class="autocomplete-input" />
                    </div>
                    <ul class="autocomplete-result-list" v-show="focused">
                      <li class="autocomplete-result" v-for="product_fil in product_filter" @mousedown="SearchProduct(product_fil)">{{getResultValue(product_fil)}}</li>
                    </ul>
                </div>
                </b-col>

                <!-- Order products  -->
                <b-col md="12">
                  <h5>{{$t('order_products')}} *</h5>
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead class="bg-gray-300">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">{{$t('ProductName')}}</th>
                          <th scope="col">{{$t('Net_Unit_Price')}}</th>
                          <th scope="col">{{$t('CurrentStock')}}</th>
                          <th scope="col">{{$t('Qty')}}</th>
                          <th scope="col">{{$t('Discount')}}</th>
                          <th scope="col">{{$t('Tax')}}</th>
                          <th scope="col">{{$t('SubTotal')}}</th>
                          <th scope="col" class="text-center">
                            <i class="fa fa-trash"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="details.length <=0">
                          <td colspan="9">{{$t('NodataAvailable')}}</td>
                        </tr>
                        <tr
                          v-for="detail in details"
                          :class="{'row_deleted': detail.del === 1 || (detail.no_unit === 0 && detail.product_type != 'is_service')}"
                          :key="detail.detail_id"
                           
                          >
                          <td>{{detail.detail_id}}</td>
                          <td>
                            <span>{{detail.code}}</span>
                            <br>
                            <span class="badge badge-success">{{detail.name}}</span>
                           
                          </td>
                          <td>{{currentUser.currency}} {{formatNumber(detail.Net_price, 3)}}</td>
                          <td>
                            <span class="badge badge-warning" v-if="detail.product_type == 'is_service'">----</span>
                            <span class="badge badge-warning" v-else>{{detail.stock}} {{detail.unitSale}}</span>
                          </td>
                          <td>
                            <div class="quantity">
                              <b-input-group>
                                <b-input-group-prepend>
                                  <span v-show="detail.no_unit !== 0 || detail.product_type == 'is_service'"
                                    class="btn btn-primary btn-sm"
                                    @click="decrement(detail ,detail.detail_id)"
                                  >-</span>
                                </b-input-group-prepend>
                                <input
                                  class="form-control"
                                  @keyup="Verified_Qty(detail,detail.detail_id)"
                                  :min="0.00"
                                  :max="detail.stock"
                                  v-model.number="detail.quantity"
                                  :disabled="detail.del === 1 || (detail.no_unit === 0 && detail.product_type != 'is_service')"
                                >
                                <b-input-group-append>
                                  <span v-show="detail.no_unit !== 0 || detail.product_type == 'is_service'"
                                    class="btn btn-primary btn-sm"
                                    @click="increment(detail ,detail.detail_id)"
                                  >+</span>
                                </b-input-group-append>
                              </b-input-group>
                            </div>
                          </td>
                          <td>{{currentUser.currency}} {{formatNumber(detail.DiscountNet * detail.quantity, 2)}}</td>
                          <td>{{currentUser.currency}} {{formatNumber(detail.taxe * detail.quantity , 2)}}</td>
                          <td>{{currentUser.currency}} {{detail.subtotal.toFixed(2)}}</td>
                          <td v-show="detail.no_unit !== 0 || detail.product_type == 'is_service'">
                            <i v-if="currentUserPermissions && currentUserPermissions.includes('edit_product_sale')"
                             @click="Modal_Updat_Detail(detail)" class="i-Edit text-25 text-success cursor-pointer"></i>
                            <i @click="delete_Product_Detail(detail.detail_id)" class="i-Close-Window text-25 text-danger cursor-pointer"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </b-col>

                <div class="offset-md-8 col-md-4 mt-4">
                  <table class="table table-striped table-sm">
                    <tbody>
                      <tr>
                        <td class="bold">{{$t('OrderTax')}}</td>
                        <td>
                          <span>{{currentUser.currency}} {{sale.TaxNet.toFixed(2)}} ({{formatNumber(sale.tax_rate ,2)}} %)</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="bold">{{$t('Discount')}}</td>
                        <td>
                          <!-- If percentage: show percent value AND discount amount; else amount only -->
                          <template v-if="String(sale.discount_Method || '2') === '1'">
                            {{ formatNumber(sale.discount, 2) }}% ({{ currentUser.currency }} {{ getCurrentSaleDiscountAmount().toFixed(2) }})
                          </template>
                          <template v-else>
                            {{currentUser.currency}} {{ getCurrentSaleDiscountAmount().toFixed(2) }}
                          </template>
                        </td>
                      </tr>
                      <tr v-if="discount_from_points && discount_from_points > 0">
                        <td class="bold">{{$t('Discount_from_Points')}}</td>
                        <td>{{currentUser.currency}} {{discount_from_points.toFixed(2)}}</td>
                      </tr>
                      <tr>
                        <td class="bold">{{$t('Shipping')}}</td>
                        <td>{{currentUser.currency}} {{sale.shipping.toFixed(2)}}</td>
                      </tr>
                      <tr>
                        <td>
                          <span class="font-weight-bold">{{$t('Total')}}</span>
                        </td>
                        <td>
                          <span
                            class="font-weight-bold"
                          >{{currentUser.currency}} {{GrandTotal.toFixed(2)}}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                 <!-- Order Tax  -->
                <b-col lg="4" md="4" sm="12" class="mb-3" v-if="currentUserPermissions && currentUserPermissions.includes('edit_tax_discount_shipping_sale')">
                  <validation-provider
                    name="Order Tax"
                    :rules="{ regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('OrderTax')">
                      <b-input-group append="%">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="OrderTax-feedback"
                          label="Order Tax"
                          v-model.number="sale.tax_rate"
                          @keyup="keyup_OrderTax()"
                        ></b-form-input>
                      </b-input-group>
                      <b-form-invalid-feedback
                        id="OrderTax-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Discount -->
                <b-col lg="4" md="4" sm="12" class="mb-3" v-if="currentUserPermissions && currentUserPermissions.includes('edit_tax_discount_shipping_sale')">
                  <validation-provider
                    name="Discount"
                    :rules="{ regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('Discount')">
                      <div class="d-flex" style="gap:8px; align-items:center;">
                        <b-input-group :append="sale.discount_Method === '1' ? '%' : currentUser.currency" class="flex-grow-1">
                          <b-form-input
                            :state="getValidationState(validationContext)"
                            aria-describedby="Discount-feedback"
                            label="Discount"
                            v-model.number="sale.discount"
                            @keyup="keyup_Discount()"
                          ></b-form-input>
                        </b-input-group>
                        <b-form-select
                          v-model="sale.discount_Method"
                          :options="[
                            { text: 'Fixed', value: '2' },
                            { text: 'Percent %', value: '1' }
                          ]"
                          style="max-width: 110px;"
                        ></b-form-select>
                      </div>
                      <b-form-invalid-feedback
                        id="Discount-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Points to convert (loyalty) -->
                <b-col
                  lg="4"
                  md="4"
                  sm="12"
                  class="mb-3"
                  v-if="showPointsSection && currentUserPermissions && currentUserPermissions.includes('edit_tax_discount_shipping_sale')"
                >
                  <label>Points to convert</label>
                  <div class="field mb-2">
                    <b-form-input
                      ref="pointsInput"
                      v-model.number="points_to_convert"
                      @input="onPointsToConvertInput"
                      type="text"
                      min="1"
                      :max="selectedClientPoints"
                      step="1"
                      :disabled="selectedClientPoints === 0 || pointsConverted"
                      placeholder="e.g., 200"
                    ></b-form-input>
                    <div class="hint mt-1">
                      Total available:
                      <strong>{{ selectedClientPoints }}</strong> pts
                    </div>
                  </div>

                  <div class="actions d-flex align-items-center" style="gap:10px;">
                    <b-button
                      :variant="pointsConverted ? 'secondary' : 'dark'"
                      @click="convertPointsToDiscount"
                      :disabled="(!pointsConverted && (selectedClientPoints === 0 || !pointsInputValid))"
                    >
                      <template v-if="!pointsConverted">Convert</template>
                      <template v-else>Unconvert</template>
                    </b-button>
                    <small
                      v-if="!pointsConverted && points_to_convert && !pointsInputValid"
                      class="warn"
                    >
                      Enter a value from 1 to your available points.
                    </small>
                    <small
                      v-if="!pointsConverted && pointsInputValid"
                      class="ok"
                    >
                      Looks good.
                    </small>
                  </div>

                  <div class="result mt-2" v-if="discount_from_points > 0">
                    ✅ Discount of
                    <strong>{{ discount_from_points }}</strong>
                    {{ currentUser.currency }}
                    will be applied
                  </div>
                </b-col>
                

                <!-- Shipping  -->
                <b-col lg="4" md="4" sm="12" class="mb-3" v-if="currentUserPermissions && currentUserPermissions.includes('edit_tax_discount_shipping_sale')">
                  <validation-provider
                    name="Shipping"
                    :rules="{ regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('Shipping')">
                      <b-input-group :append="currentUser.currency">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="Shipping-feedback"
                          label="Shipping"
                          v-model.number="sale.shipping"
                          @keyup="keyup_Shipping()"
                        ></b-form-input>
                      </b-input-group>
                      <b-form-invalid-feedback
                        id="Shipping-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                  <!-- Status  -->
                <b-col lg="4" md="4" sm="12" class="mb-3">
                  <validation-provider name="Status" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Status') + ' ' + '*'">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="sale.statut"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Status')"
                        :options="
                                [
                                  {label: 'completed', value: 'completed'},
                                  {label: 'Pending', value: 'pending'},
                                  {label: 'ordered', value: 'ordered'}
                                ]"
                      ></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <b-col md="12">
                  <b-form-group :label="$t('Note')">
                    <textarea
                      v-model="sale.notes"
                      rows="4"
                      class="form-control"
                      :placeholder="$t('Afewwords')"
                    ></textarea>
                  </b-form-group>
                </b-col>
                <b-col md="12">
                  <b-form-group>
                    <b-button variant="primary" @click="Submit_Sale" :disabled="SubmitProcessing"><i class="i-Yes me-2 font-weight-bold"></i> {{$t('submit')}}</b-button>
                     <div v-once class="typo__p" v-if="SubmitProcessing">
                      <div class="spinner sm spinner-primary mt-3"></div>
                    </div>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>

    <!-- Modal Update Detail Product -->
    <validation-observer ref="Update_Detail">
      <b-modal hide-footer size="lg" id="form_Update_Detail" :title="detail.name">
        <b-form @submit.prevent="submit_Update_Detail">
          <b-row>
            <!-- Unit Price -->
           <b-col lg="6" md="6" sm="12">
              <validation-provider
                name="Product Price"
                :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('ProductPrice') + ' ' + '*'" id="Price-input">
                  <b-form-input
                    label="Product Price"
                    v-model.number="detail.Unit_price"
                    :state="getValidationState(validationContext)"
                    aria-describedby="Price-feedback"
                  ></b-form-input>
                  <b-form-invalid-feedback id="Price-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Tax Method -->
           <b-col lg="6" md="6" sm="12">
              <validation-provider name="Tax Method" :rules="{ required: true}">
                <b-form-group slot-scope="{ valid, errors }" :label="$t('TaxMethod') + ' ' + '*'">
                  <v-select
                    :class="{'is-invalid': !!errors.length}"
                    :state="errors[0] ? false : (valid ? true : null)"
                    v-model="detail.tax_method"
                    :reduce="label => label.value"
                    :placeholder="$t('Choose_Method')"
                    :options="
                           [
                            {label: 'Exclusive', value: '1'},
                            {label: 'Inclusive', value: '2'}
                           ]"
                  ></v-select>
                  <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Tax Rate -->
           <b-col lg="6" md="6" sm="12">
              <validation-provider
                name="Order Tax"
                :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('OrderTax') + ' ' + '*'">
                  <b-input-group append="%">
                    <b-form-input
                      label="Order Tax"
                      v-model.number="detail.tax_percent"
                      :state="getValidationState(validationContext)"
                      aria-describedby="OrderTax-feedback"
                    ></b-form-input>
                  </b-input-group>
                  <b-form-invalid-feedback id="OrderTax-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Discount Method -->
           <b-col lg="6" md="6" sm="12">
              <validation-provider name="Discount Method" :rules="{ required: true}">
                <b-form-group slot-scope="{ valid, errors }" :label="$t('Discount_Method') + ' ' + '*'">
                  <v-select
                    v-model="detail.discount_Method"
                    :reduce="label => label.value"
                    :placeholder="$t('Choose_Method')"
                    :class="{'is-invalid': !!errors.length}"
                    :state="errors[0] ? false : (valid ? true : null)"
                    :options="
                           [
                            {label: 'Percent %', value: '1'},
                            {label: 'Fixed', value: '2'}
                           ]"
                  ></v-select>
                  <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Discount Rate -->
            <b-col lg="6" md="6" sm="12">
              <validation-provider
                name="Discount Rate"
                :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                v-slot="validationContext"
              >
                <b-form-group :label="$t('Discount') + ' ' + '*'">
                  <b-form-input
                    label="Discount"
                    v-model.number="detail.discount"
                    :state="getValidationState(validationContext)"
                    aria-describedby="Discount-feedback"
                  ></b-form-input>
                  <b-form-invalid-feedback id="Discount-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

             <!-- Imei or serial numbers -->
              <b-col lg="12" md="12" sm="12" v-show="detail.is_imei">
                <b-form-group :label="$t('Add_product_IMEI_Serial_number')">
                  <b-form-input
                    label="Add_product_IMEI_Serial_number"
                    v-model="detail.imei_number"
                    :placeholder="$t('Add_product_IMEI_Serial_number')"
                  ></b-form-input>
                </b-form-group>
            </b-col>

            <b-col md="12">
               <b-form-group>
                <b-button
                  variant="primary"
                  type="submit"
                  :disabled="Submit_Processing_detail"
                ><i class="i-Yes me-2 font-weight-bold"></i> {{$t('submit')}}</b-button>
                <div v-once class="typo__p" v-if="Submit_Processing_detail">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </b-modal>
    </validation-observer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Edit Sale"
  },
  data() {
    return {
      focused: false,
      timer:null,
      search_input:'',
      product_filter:[],
      isLoading: true,
      SubmitProcessing:false,
      Submit_Processing_detail:false,
      warehouses: [],
      clients: [],
      products: [],
      details: [],
      detail: {},
      sales: [],
      showPointsSection: false,
      // Points / loyalty state
      selectedClientPoints: 0,
      initialClientPoints: 0,
      points_to_convert: 0,
      discount_from_points: 0,
      used_points: 0,
      clientIsEligible: false,
      pointsConverted: false,
      point_to_amount_rate: 0,
      sale: {
        id: "",
        date: "",
        statut: "",
        notes: "",
        client_id: "",
        warehouse_id: "",
        tax_rate: 0,
        TaxNet: 0,
        shipping: 0,
        discount: 0,
        discount_Method: "2", // "1" for percentage, "2" for fixed (default)
      },
      total: 0,
      GrandTotal: 0,
      product: {
        id: "",
        code: "",
        stock: "",
        quantity: 1,
        discount: "",
        DiscountNet: "",
        discount_Method: "",
        sale_unit_id: "",
        no_unit:"",
        name: "",
        unitSale: "",
        Net_price: "",
        Total_price: "",
        Unit_price: "",
        subtotal: "",
        product_id: "",
        detail_id: "",
        taxe: "",
        tax_percent: "",
        tax_method: "",
        product_variant_id: "",
        del: "",
        etat: "",
        is_imei: "",
        imei_number:"",
      }
    };
  },

  watch: {
    // Recalculate totals whenever discount type changes (fixed / percentage)
    'sale.discount_Method'(newVal, oldVal) {
      this.Calcul_Total();
    }
  },

  computed: {
    ...mapGetters(["currentUserPermissions","currentUser"]),

    // Simple validity check for points_to_convert (same behavior as create_sale)
    pointsInputValid() {
      const max = Number(this.selectedClientPoints) || 0;
      const val = Number(this.points_to_convert);
      return Number.isInteger(val) && val >= 1 && val <= max;
    }
  },

  methods: {

    showModal() {
      this.$bvModal.show('open_scan');
      
    },

    onScan (decodedText, decodedResult) {
      const code = decodedText;
      this.search_input = code;
      this.search();
      this.$bvModal.hide('open_scan');
    },

     handleFocus() {
      this.focused = true
    },

    handleBlur() {
      this.focused = false
    },
    

    //--- Submit Validate Update Sale
    Submit_Sale() {
      this.$refs.edit_sale.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else if (Number(this.GrandTotal) < 0) {
          const msg = this.$t ? `${this.$t('pos.Total_Payable')} ${this.$t('cannot_be_negative') || 'cannot be negative'}` : 'Total Payable cannot be negative';
          this.makeToast('warning', msg, this.$t ? this.$t('Warning') : 'Warning');
          return;
        } else {
          this.Update_Sale();
        }
      });
    },
    //---Submit Validation Update Detail
    submit_Update_Detail() {
      this.$refs.Update_Detail.validate().then(success => {
        if (!success) {
          return;
        } else {
          this.Update_Detail();
        }
      });
    },
    //---Validate State Fields
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //------ Toast
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },

    //---------------------------- Show Modal Update Detail Product
    Modal_Updat_Detail(detail) {
      NProgress.start();
      NProgress.set(0.1);
      this.detail = {};
      this.detail.name = detail.name;
      this.detail.detail_id = detail.detail_id;
      this.detail.Unit_price = detail.Unit_price;
      this.detail.tax_method = detail.tax_method;
      this.detail.discount_Method = detail.discount_Method;
      this.detail.discount = detail.discount;
      this.detail.quantity = detail.quantity;
      this.detail.tax_percent = detail.tax_percent;
      this.detail.is_imei = detail.is_imei;
      this.detail.imei_number = detail.imei_number;

      setTimeout(() => {
        NProgress.done();
        this.$bvModal.show("form_Update_Detail");
      }, 1000);

    },

    //---------------------------- Submit Update Detail Product

    Update_Detail() {
      NProgress.start();
      NProgress.set(0.1);
      this.Submit_Processing_detail = true;
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === this.detail.detail_id) {
          this.details[i].tax_percent = this.detail.tax_percent;
          this.details[i].Unit_price = this.detail.Unit_price;
          this.details[i].quantity = this.detail.quantity;
          this.details[i].tax_method = this.detail.tax_method;
          this.details[i].discount_Method = this.detail.discount_Method;
          this.details[i].discount = this.detail.discount;
          this.details[i].imei_number = this.detail.imei_number;

          if (this.details[i].discount_Method == "2") {
            //Fixed
            this.details[i].DiscountNet = this.detail.discount;
          } else {
            //Percentage %
            this.details[i].DiscountNet = parseFloat(
              (this.detail.Unit_price * this.details[i].discount) / 100
            );
          }

          if (this.details[i].tax_method == "1") {
            //Exclusive
            this.details[i].Net_price = parseFloat(
              this.detail.Unit_price - this.details[i].DiscountNet
            );

            this.details[i].taxe = parseFloat(
              (this.detail.tax_percent *
                (this.detail.Unit_price - this.details[i].DiscountNet)) /
                100
            );
          } else {
            //Inclusive
            this.details[i].taxe = parseFloat(
              (this.detail.Unit_price - this.details[i].DiscountNet) *
                (this.detail.tax_percent / 100)
            );

            this.details[i].Net_price = parseFloat(
              this.detail.Unit_price -
                this.details[i].taxe -
                this.details[i].DiscountNet
            );
          }

          this.$forceUpdate();
        }
      }
      this.Calcul_Total();

       setTimeout(() => {
        NProgress.done();
        this.Submit_Processing_detail = false;
        this.$bvModal.hide("form_Update_Detail");
      }, 1000);

    },

    

    // Search Products
    search(){
      if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
      }
      if (this.search_input.length < 2) {
        return this.product_filter= [];
      }
      if (this.sale.warehouse_id != "" &&  this.sale.warehouse_id != null) {
        this.timer = setTimeout(() => {

          let barcode = this.search_input.trim();
          let weight = null;
          // Check if the barcode is from a weighing scale (13 digits)
          if (barcode.length === 13 && !isNaN(barcode)) {
            // Find the product by product code
            let product = this.products.find(prod => prod.code === barcode);
            if (product) {
              this.SearchProduct(product, weight);
              return;
            }else{

              let productCode = barcode.substring(0, 7); // First 7 digits → Product Code
              let weight = parseFloat(barcode.substring(7, 12)) / 1000; // Convert weight (grams to kg)
              let product = this.products.find(prod => prod.code === productCode);
              if (product) {
                product.quantity = weight; // Assign weight to product
                this.SearchProduct(product, weight);
                return;
              }
            }

            this.makeToast("danger", "Invalid product code scanned", this.$t("Error"));
            this.search_input= '';
            this.$refs.product_autocomplete.value = "";
            this.product_filter = [];
          }
          // else{
          //   //  No product found - Display Error Alert
          //   this.makeToast("danger", "Invalid product code scanned", this.$t("Error"));
          //   this.search_input= '';
          //   this.$refs.product_autocomplete.value = "";
          //   this.product_filter = [];

          // }
          
          
          // Regular product search (for non-weighing scale barcodes)
          const product_filter = this.products.filter(product => product.code === this.search_input || product.barcode.includes(this.search_input));
              if(product_filter.length === 1){
                this.SearchProduct(product_filter[0], weight);
              }else {
                this.product_filter=  this.products.filter(product => {
                  return (
                    product.name.toLowerCase().includes(this.search_input.toLowerCase()) ||
                    product.code.toLowerCase().includes(this.search_input.toLowerCase()) ||
                    product.barcode.toLowerCase().includes(this.search_input.toLowerCase())
                    );
                });
            }
        }, 800);
      } else {
        this.makeToast(
          "warning",
          this.$t("SelectWarehouse"),
          this.$t("Warning")
        );
      }
    },

    //-------------- get Result Value Search Product

    getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },



    //-------------- Submit Search Product


    SearchProduct(result, weight = null) {
        this.product = {};
        if (
          this.details.length > 0 &&
          this.details.some(detail => detail.code === result.code)
        ) {
          this.makeToast("warning", this.$t("AlreadyAdd"), this.$t("Warning"));
        } else {

            if( result.product_type =='is_service'){
              this.product.quantity = 1;
              this.product.code = result.code;
            }else{

              this.product.code = result.code;
              this.product.no_unit = 1;
              this.product.stock = result.qte_sale;

              // Check if it's a weighing scale product
              if (weight !== null) {
                this.product.quantity = weight; // Assign extracted weight
              } else {
                this.product.quantity = result.qte_sale < 1 ? result.qte_sale : 1;
              }

           
            }
          this.product.product_variant_id = result.product_variant_id;
          this.Get_Product_Details(result.id, result.product_variant_id);
        }

        this.search_input= '';
        this.$refs.product_autocomplete.value = "";
        this.product_filter = [];
    },

    //---------------------- Event Select Warehouse ------------------------------\\
    Selected_Warehouse(value) {
      this.search_input= '';
      this.product_filter = [];
      this.Get_Products_By_Warehouse(value);
    },

     //------------------------------------ Get Products By Warehouse -------------------------\\

    Get_Products_By_Warehouse(id) {
      // Start the progress bar.
        NProgress.start();
        NProgress.set(0.1);
      axios
        .get("get_Products_by_warehouse/" + id + "?stock=" + 1 + "&is_sale=" + 1 + "&product_service=" + 1 + "&product_combo=" + 1)
         .then(response => {
            this.products = response.data;
             NProgress.done();

            })
          .catch(error => {
          });
    },

    //----------------------------------------- Add Product to order list -------------------------\\
    add_product() {
      if (this.details.length > 0) {
        this.Last_Detail_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }

      this.details.push(this.product);

      if(this.product.is_imei){
        this.Modal_Updat_Detail(this.product);
      }
    },

    //-----------------------------------Verified QTY ------------------------------\\
    Verified_Qty(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id === id) {
          if (isNaN(detail.quantity)) {
            this.details[i].quantity = detail.qte_copy;
          }

          if (detail.etat == "new" && detail.quantity > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.stock;
          } else if (
            detail.etat == "current" &&
            detail.quantity > detail.stock + detail.qte_copy
          ) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            this.details[i].quantity = detail.qte_copy;
          } else {
            this.details[i].quantity = detail.quantity;
          }
        }
      }

      this.$forceUpdate();
      this.Calcul_Total();
    },

    //-----------------------------------increment QTY ------------------------------\\

    increment(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.etat == "new" && detail.quantity + 1 > detail.stock) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          } else if (
            detail.etat == "current" &&
            detail.quantity + 1 > detail.stock + detail.qte_copy
          ) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          } else {
            this.formatNumber(this.details[i].quantity++, 2);
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
    },

    //-----------------------------------decrement QTY ------------------------------\\

    decrement(detail, id) {
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].detail_id == id) {
          if (detail.quantity - 1 > 0) {
            if (detail.etat == "new" && detail.quantity - 1 > detail.stock) {
              this.makeToast(
                "warning",
                this.$t("LowStock"),
                this.$t("Warning")
              );
            } else if (
              detail.etat == "current" &&
              detail.quantity - 1 > detail.stock + detail.qte_copy
            ) {
              this.makeToast(
                "warning",
                this.$t("LowStock"),
                this.$t("Warning")
              );
            } else {
              this.formatNumber(this.details[i].quantity--, 2);
            }
          }
        }
      }
      this.$forceUpdate();
      this.Calcul_Total();
    },

    //---------- keyup OrderTax
    keyup_OrderTax() {
      if (isNaN(this.sale.tax_rate)) {
        this.sale.tax_rate = 0;
      } else if(this.sale.tax_rate == ''){
         this.sale.tax_rate = 0;
        this.Calcul_Total();
      }else {
        this.Calcul_Total();
      }
    },

    //---------- keyup Discount

    keyup_Discount() {
      if (isNaN(this.sale.discount)) {
        this.sale.discount = 0;
      } else if(this.sale.discount == ''){
         this.sale.discount = 0;
        this.Calcul_Total();
      }else {
        this.Calcul_Total();
      }
    },

    // Calculate discount amount for current sale (for display in summary card)
    getCurrentSaleDiscountAmount() {
      try {
        const discountMethod = String(this.sale.discount_Method || '2'); // Default to fixed for backward compatibility
        const discountValue = Number(this.sale.discount || 0);
        const subtotal = this.total || 0;

        if (discountMethod === '1') {
          // Percentage discount on subtotal (manual discount only, no points)
          return parseFloat((subtotal * (discountValue / 100)).toFixed(2));
        } else {
          // Fixed discount (manual discount only, no points)
          return parseFloat(Math.min(discountValue, subtotal).toFixed(2));
        }
      } catch (e) {
        return Number(this.sale.discount || 0);
      }
    },

    // Handle manual input for points to convert (keep it within [0, available])
    onPointsToConvertInput() {
      let max = Number(this.selectedClientPoints) || 0;
      let val = Number(this.points_to_convert);
      if (!Number.isFinite(val)) val = 0;
      if (val < 0) val = 0;
      val = Math.floor(val);
      if (val > max) {
        this.makeToast &&
          this.makeToast(
            "warning",
            this.$t ? this.$t("Entered_points_exceed_available") : "Entered points exceed available",
            this.$t ? this.$t("Warning") : "Warning"
          );
        val = max;
      }
      this.points_to_convert = val;
    },

    // Convert / unconvert points to discount (same behavior as create_sale)
    convertPointsToDiscount() {
      if (this.pointsConverted) {
        // We are UN-converting points for this sale.
        // Increase the visible available points by the amount that was used on this sale,
        // to reflect the rollback that will happen on save.
        const prevUsed = Number(this.used_points || 0);
        if (prevUsed > 0) {
          const currentAvail = Number(this.selectedClientPoints || 0);
          this.selectedClientPoints = currentAvail + prevUsed;
          this.initialClientPoints = this.selectedClientPoints;
        }

        // Reset conversion - sale.discount remains unchanged (it only contains manual discount)
        this.discount_from_points = 0;
        this.used_points = 0;
        this.points_to_convert = 0;

        this.pointsConverted = false;
      } else {
        const maxPoints = Number(this.selectedClientPoints) || 0;
        let pts = Number(this.points_to_convert);
        if (!Number.isFinite(pts) || pts <= 0) {
          this.makeToast &&
            this.makeToast(
              "warning",
              this.$t ? this.$t("Please_enter_points_to_convert") : "Please enter points to convert",
              this.$t ? this.$t("Warning") : "Warning"
            );
          return;
        }
        if (pts > maxPoints) {
          this.makeToast &&
            this.makeToast(
              "warning",
              this.$t ? this.$t("Entered_points_exceed_available") : "Entered points exceed available",
              this.$t ? this.$t("Warning") : "Warning"
            );
          this.points_to_convert = maxPoints;
          pts = maxPoints;
          this.$nextTick &&
            this.$nextTick(() => {
              const r = this.$refs && this.$refs.pointsInput;
              if (r && r.$el) {
                try {
                  r.$el.value = String(this.points_to_convert);
                } catch (e) {}
              }
            });
        }
        const discount = parseFloat((pts * this.point_to_amount_rate).toFixed(2));
        this.discount_from_points = discount;
        // Don't merge points into sale.discount - keep them separate so input shows only manual discount
        this.used_points = pts;
        // ensure input reflects final used points
        this.points_to_convert = pts;
        this.$nextTick &&
          this.$nextTick(() => {
            const r = this.$refs && this.$refs.pointsInput;
            if (r && r.$el) {
              try {
                r.$el.value = String(this.points_to_convert);
              } catch (e) {}
            }
          });
        this.pointsConverted = true;
        // reduce available points display until saved
        const baseAvail = Number(this.initialClientPoints || this.selectedClientPoints) || 0;
        this.selectedClientPoints = Math.max(0, baseAvail - pts);
      }

      this.Calcul_Total(); // Recalculate grand total
    },

    //---------- keyup Shipping

    keyup_Shipping() {
      if (isNaN(this.sale.shipping)) {
        this.sale.shipping = 0;
      } else if(this.sale.shipping == ''){
         this.sale.shipping = 0;
        this.Calcul_Total();
      }else {
        this.Calcul_Total();
      }
    },

    //------------------------------Formetted Numbers -------------------------\\
    formatNumber(number, dec) {
      const value = (typeof number === "string"
        ? number
        : number.toString()
      ).split(".");
      if (dec <= 0) return value[0];
      let formated = value[1] || "";
      if (formated.length > dec)
        return `${value[0]}.${formated.substr(0, dec)}`;
      while (formated.length < dec) formated += "0";
      return `${value[0]}.${formated}`;
    },

    //-----------------------------------------Calcul Total ------------------------------\\
    Calcul_Total() {
      this.total = 0;
      for (var i = 0; i < this.details.length; i++) {
        var tax = this.details[i].taxe * this.details[i].quantity;
        this.details[i].subtotal = parseFloat(
          this.details[i].quantity * this.details[i].Net_price + tax
        );
        this.total = parseFloat(this.total + this.details[i].subtotal);
      }

      // Calculate discount based on type (backward compatible: default to fixed if not set)
      const discountMethod = String(this.sale.discount_Method || '2');
      const discountValue = Number(this.sale.discount || 0);
      let discountAmount = 0;

      if (discountMethod === '1') {
        // Percentage discount on subtotal
        const percentAmount = parseFloat((this.total * (discountValue / 100)).toFixed(2));
        // Points-based discount is always a fixed amount; apply it in addition, but never exceed remaining subtotal
        const remainingAfterPercent = Math.max(this.total - percentAmount, 0);
        const pointsAmount = parseFloat(
          Math.min(Number(this.discount_from_points || 0), remainingAfterPercent).toFixed(2)
        );
        discountAmount = percentAmount + pointsAmount;
      } else {
        // Fixed discount: apply both manual discount and points discount separately
        const manualDiscount = parseFloat(Math.min(discountValue, this.total).toFixed(2));
        const remainingAfterManual = Math.max(this.total - manualDiscount, 0);
        const pointsDiscount = parseFloat(
          Math.min(Number(this.discount_from_points || 0), remainingAfterManual).toFixed(2)
        );
        discountAmount = manualDiscount + pointsDiscount;
      }

      const total_without_discount = parseFloat(
        (this.total - discountAmount).toFixed(2)
      );
      this.sale.TaxNet = parseFloat(
        (total_without_discount * this.sale.tax_rate) / 100
      );
      this.GrandTotal = parseFloat(
        total_without_discount + this.sale.TaxNet + this.sale.shipping
      );

      var grand_total =  this.GrandTotal.toFixed(2);
      this.GrandTotal = parseFloat(grand_total);
    },

    //-----------------------------------Delete Detail Product ------------------------------\\
    delete_Product_Detail(id) {
      for (var i = 0; i < this.details.length; i++) {
        if (id === this.details[i].detail_id) {
          this.details.splice(i, 1);
          this.Calcul_Total();
        }
      }
    },

    //-----------------------------------verified Order List ------------------------------\\

    verifiedForm() {
      if (this.details.length <= 0) {
        this.makeToast(
          "warning",
          this.$t("AddProductToList"),
          this.$t("Warning")
        );
        return false;
      } else {
        var count = 0;
        for (var i = 0; i < this.details.length; i++) {
          if (
            this.details[i].quantity == "" ||
            this.details[i].quantity === 0
          ) {
            count += 1;
          }
        }

        if (count > 0) {
          this.makeToast("warning", this.$t("AddQuantity"), this.$t("Warning"));
          return false;
        } else {
          return true;
        }
      }
    },

    //--------------------------------- Update Sale -------------------------\\
    Update_Sale() {
      if (this.verifiedForm()) {
        if (Number(this.GrandTotal) < 0) {
          const msg = this.$t ? `${this.$t('pos.Total_Payable')} ${this.$t('cannot_be_negative') || 'cannot be negative'}` : 'Total Payable cannot be negative';
          this.makeToast('warning', msg, this.$t ? this.$t('Warning') : 'Warning');
          return;
        }
        this.SubmitProcessing = true;
        // Start the progress bar.
        NProgress.start();
        NProgress.set(0.1);
        let id = this.$route.params.id;
        axios
          .put(`sales/${id}`, {
            date: this.sale.date,
            client_id: this.sale.client_id,
            GrandTotal: this.GrandTotal,
            warehouse_id: this.sale.warehouse_id,
            statut: this.sale.statut,
            notes: this.sale.notes,
            tax_rate: this.sale.tax_rate?this.sale.tax_rate:0,
            TaxNet: this.sale.TaxNet?this.sale.TaxNet:0,
            discount: this.sale.discount?this.sale.discount:0,
            // Ensure order-level discount method is sent when editing
            discount_Method: String(this.sale.discount_Method || '2'),
            shipping: this.sale.shipping?this.sale.shipping:0,
            details: this.details.map(d => ({
              ...d,
              price_type: d.price_type || 'retail'
            })),
            discount_from_points: this.discount_from_points,
            used_points: this.used_points,
          })
          .then(response => {
            this.makeToast(
              "success",
              this.$t("Successfully_Updated"),
              this.$t("Success")
            );
            NProgress.done();
            this.SubmitProcessing = false;

            this.$router.push({ name: "index_sales" });
          })
          .catch(error => {
            NProgress.done();
            this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
            this.SubmitProcessing = false;
          });
      }
    },

    //-------------------------------- Get Last Detail Id -------------------------\\
    Last_Detail_id() {
      this.product.detail_id = 0;
      var len = this.details.length;
      this.product.detail_id = this.details[len - 1].detail_id + 1;
    },

    //---------------------------------Get Product Details ------------------------\\

    Get_Product_Details(product_id, variant_id) {
      axios.get("/show_product_data/" + product_id +"/"+ variant_id).then(response => {
        this.product.del = 0;
        this.product.id = 0;
        this.product.etat = "new";
        this.product.discount           = response.data.discount;
        this.product.DiscountNet        = response.data.DiscountNet;
        this.product.discount_Method    = response.data.discount_method;
        this.product.product_id = response.data.id;
        this.product.name = response.data.name;
        this.product.product_type = response.data.product_type;
        this.product.Net_price = response.data.Net_price;
        this.product.Unit_price = response.data.Unit_price;
        this.product.Unit_price_wholesale = response.data.Unit_price_wholesale;
        this.product.wholesale_Net_price = response.data.wholesale_Net_price;
        this.product.min_price = response.data.min_price;
        // baselines for toggle
        this.product.retail_unit_price = response.data.Unit_price;
        this.product.wholesale_unit_price = response.data.Unit_price_wholesale;
        this.product.price_type = 'retail';
        this.product.taxe = response.data.tax_price;
        this.product.tax_method = response.data.tax_method;
        this.product.tax_percent = response.data.tax_percent;
        this.product.unitSale = response.data.unitSale;
        this.product.sale_unit_id = response.data.sale_unit_id;
        this.product.is_imei = response.data.is_imei;
        this.product.imei_number = '';
        // ensure min price respected on default
        if (this.product.Net_price < (this.product.min_price || 0)) {
          this.product.price_type = 'retail';
        }
        this.add_product();
        this.Calcul_Total();
      });
    },

    //--------------------------------------- Get Elements ------------------------------\\
    GetElements() {
      let id = this.$route.params.id;
      axios
        .get(`sales/${id}/edit`)
        .then(response => {
          const rawSale = response.data.sale || {};

          // Normalize discount method coming from backend:
          // 1 / '1' / 'percent' / 'percentage'  => '1'
          // 2 / '2' / 'fixed'                   => '2'
          // null/undefined                      => '2' (fixed by default)
          let methodRaw = rawSale.discount_Method;
          let normalizedMethod = '2';
          if (methodRaw !== undefined && methodRaw !== null) {
            const dm = String(methodRaw).toLowerCase().trim();
            if (dm === '1' || dm === 'percent' || dm === 'percentage') {
              normalizedMethod = '1';
            } else if (dm === '2' || dm === 'fixed') {
              normalizedMethod = '2';
            }
          }

          this.sale = {
            ...rawSale,
            discount_Method: normalizedMethod,
          };

          this.details = response.data.details;
          this.clients = response.data.clients;
          this.warehouses = response.data.warehouses;
          this.point_to_amount_rate = response.data.point_to_amount_rate;
          this.discount_from_points = response.data.discount_from_points || 0;
          this.used_points = this.sale.used_points > 0 ? this.sale.used_points : 0;

          // Fetch current loyalty points for this client to drive the points UI
          if (this.sale.client_id) {
            axios
              .get(`/get_points_client/${this.sale.client_id}`)
              .then(res => {
                const data = res.data || {};
                if (data.is_royalty_eligible || this.discount_from_points > 0 || this.used_points > 0) {
                  this.selectedClientPoints = Number(data.points || 0);
                  this.initialClientPoints = Number(data.points || 0);
                  this.clientIsEligible = this.selectedClientPoints > 0;
                } else {
                  this.selectedClientPoints = 0;
                  this.initialClientPoints = 0;
                  this.clientIsEligible = false;
                }
                // Show section if client has points OR this sale already used points/discount_from_points
                this.showPointsSection =
                  (this.clientIsEligible && this.selectedClientPoints > 0) ||
                  (this.used_points && this.used_points > 0) ||
                  (this.discount_from_points && this.discount_from_points > 0);
                // If sale already has discount_from_points, treat as converted
                if (this.discount_from_points > 0 && this.used_points > 0) {
                  this.pointsConverted = true;
                  this.points_to_convert = this.used_points;
                }
              })
              .catch(() => {
                // On failure, just keep points UI hidden by default
                this.selectedClientPoints = 0;
                this.initialClientPoints = 0;
                this.clientIsEligible = false;
                this.showPointsSection =
                  (this.used_points && this.used_points > 0) ||
                  (this.discount_from_points && this.discount_from_points > 0);
              })
              .finally(() => {
                this.Get_Products_By_Warehouse(this.sale.warehouse_id);
                this.Calcul_Total();
                this.isLoading = false;
              });
          } else {
            // No client id, just proceed with existing data
            this.showPointsSection =
              (this.used_points && this.used_points > 0) ||
              (this.discount_from_points && this.discount_from_points > 0);
            this.Get_Products_By_Warehouse(this.sale.warehouse_id);
            this.Calcul_Total();
            this.isLoading = false;
          }
        })
        .catch(response => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        });
    }
  },

  //----------------------------- Created function-------------------
  created() {
    this.GetElements();
  }
};
</script>

<style>

  .input-with-icon {
    display: flex;
    align-items: center;
  }

  .scan-icon {
    width: 50px; /* Adjust size as needed */
    height: 50px;
    margin-right: 8px; /* Adjust spacing as needed */
    cursor: pointer;
  }  

  

</style>