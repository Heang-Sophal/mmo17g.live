<template>
  <div class="main-content">
    <breadcumb page="Import Sales" :folder="$t('ListSales')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <validation-observer ref="create_sale" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Sale">
        <b-row>
          <b-col lg="12" md="12" sm="12">
            <b-card>
              <b-row>
                <!-- date  -->
                <b-col lg="4" md="4" sm="12" class="mb-3">
                  <validation-provider
                    name="date"
                    :rules="{ required: true}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('date') + ' *'">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="date-feedback"
                        type="date"
                        v-model="sale.date"
                      ></b-form-input>
                      <b-form-invalid-feedback
                        id="date-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
                <!-- Customer -->
                <b-col lg="4" md="4" sm="12" class="mb-3">
                  <validation-provider name="Customer" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Customer') + ' *'">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="sale.client_id"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Customer')"
                        :options="clients.map(c => ({label: c.name, value: c.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- warehouse -->
                <b-col lg="4" md="4" sm="12" class="mb-3">
                  <validation-provider name="warehouse" :rules="{ required: true}">
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('warehouse') + ' *'">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="sale.warehouse_id"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Warehouse')"
                        :options="warehouses.map(w => ({label: w.name, value: w.id}))"
                      />
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

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
                      <b-input-group :append="currentUser.currency">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="Discount-feedback"
                          v-model.number="sale.discount"
                          @keyup="keyup_Discount()"
                        ></b-form-input>
                      </b-input-group>
                      <b-form-invalid-feedback
                        id="Discount-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
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
                    <b-form-group slot-scope="{ valid, errors }" :label="$t('Status') + ' *'">
                      <v-select
                        :class="{'is-invalid': !!errors.length}"
                        :state="errors[0] ? false : (valid ? true : null)"
                        v-model="sale.statut"
                        :reduce="label => label.value"
                        :placeholder="$t('Choose_Status')"
                        :options="[
                          { label: 'completed', value: 'completed' },
                          { label: 'Pending', value: 'pending' }
                        ]"
                      ></v-select>
                      <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Csv File -->
                <b-col lg="4" md="4" sm="12" class="mb-3">
                  <b-form-group :label="$t('Choose_Csv_File') + ' *'">
                    <input type="file" @change="onFileSelected" accept=".csv">
                    <b-form-invalid-feedback
                      id="File-feedback"
                      class="d-block"
                    >{{ $t('field_must_be_in_csv_format') }}</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

                <!-- Example csv -->
                <b-col lg="4" md="4" sm="12" class="mb-3">
                  <b-button
                    :href="'/import/exemples/import_sales.csv'"
                    variant="info"
                    size="sm"
                    block
                  >{{ $t("Download_exemple") }}</b-button>
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
                <!-- Error list (same style as import products) -->
                <b-col md="12" v-if="errorMessages.length">
                  <b-alert show variant="danger" class="mt-3">
                    <div class="d-flex align-items-start">
                      <i class="i-Close-Window mr-2 mt-1"></i>
                      <div>
                        <div class="font-weight-bold mb-1">Import failed. Fix the issues below:</div>
                        <ul class="mb-0 pl-3">
                          <li v-for="(err, idx) in errorMessages" :key="'err-' + idx">{{ err }}</li>
                        </ul>
                      </div>
                    </div>
                  </b-alert>
                </b-col>

                <b-col md="12">
                  <b-form-group>
                    <b-button variant="primary" @click="Submit_Sale" :disabled="SubmitProcessing">
                      <i class="i-Yes me-2 font-weight-bold"></i> {{ $t('submit') }}
                    </b-button>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "Import Sales"
  },
  data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      data: new FormData(),
      warehouses: [],
      clients: [],
      import_products: "",
      errorMessages: [],
      sale: {
        date: new Date().toISOString().slice(0, 10),
        statut: "completed",
        notes: "",
        client_id: "",
        warehouse_id: "",
        tax_rate: 0,
        shipping: 0,
        discount: 0
      }
    };
  },
  computed: {
    ...mapGetters(["currentUserPermissions", "currentUser"])
  },
  methods: {
    onFileSelected(e) {
      this.import_products = "";
      const file = e.target.files[0];
      if (file) this.import_products = file;
    },

    Submit_Sale() {
      this.errorMessages = [];
      this.$refs.create_sale.validate().then(success => {
        if (!success) {
          this.makeToast("danger", this.$t("Please_fill_the_form_correctly"), this.$t("Failed"));
        } else {
          this.Create_Sale();
        }
      });
    },

    flattenLaravelErrors(errorsObj) {
      const out = [];
      if (!errorsObj || typeof errorsObj !== "object") return out;
      Object.keys(errorsObj).forEach(k => {
        const v = errorsObj[k];
        if (Array.isArray(v)) {
          v.forEach(m => {
            if (m) out.push(String(m));
          });
        } else if (v) {
          out.push(String(v));
        }
      });
      return out;
    },
    collectErrorsFromResponse(data) {
      const out = [];
      if (!data || typeof data !== "object") return out;
      if (Array.isArray(data.messages)) {
        data.messages.forEach(m => {
          if (m) out.push(String(m));
        });
      }
      if (data.message) {
        out.push(String(data.message));
      }
      if (data.errors) {
        out.push(...this.flattenLaravelErrors(data.errors));
      }
      if (data.insufficient && Array.isArray(data.insufficient)) {
        data.insufficient.forEach(it => {
          out.push(
            `${it.product_code}: requested ${it.requested}, available ${it.available}`
          );
        });
      }
      if (data.msg && !(data.insufficient && data.insufficient.length)) {
        out.push(String(data.msg));
      }
      if (data.details) {
        if (Array.isArray(data.details)) {
          data.details.forEach(m => {
            if (m) out.push(String(m));
          });
        } else if (typeof data.details === "string") {
          out.push(data.details);
        }
      }
      if (data.error && typeof data.error === "string") {
        out.push(data.error);
      }
      const seen = {};
      return out.filter(m => (seen[m] ? false : (seen[m] = true)));
    },
    collectErrorsFromAxios(err) {
      // App axios interceptor (main.js) rejects with error.response.data, so catch()
      // often receives the response body { msg, details, ... } instead of full Axios error.
      let payload = null;
      if (err && err.response && err.response.data !== undefined) {
        payload = err.response.data;
      } else if (err && typeof err === "object" && (err.msg !== undefined || err.details !== undefined || err.errors !== undefined || err.message !== undefined)) {
        payload = err;
      }
      const list = this.collectErrorsFromResponse(payload);
      if (list.length) return list;
      if (err && typeof err === "object" && err.message) return [String(err.message)];
      return [this.$t("An_error_occurred_while_processing_the_CSV_file") || "An error occurred while processing the CSV file."];
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },

    keyup_OrderTax() {
      if (isNaN(this.sale.tax_rate) || this.sale.tax_rate === "") {
        this.sale.tax_rate = 0;
      }
    },
    keyup_Discount() {
      if (isNaN(this.sale.discount) || this.sale.discount === "") {
        this.sale.discount = 0;
      }
    },
    keyup_Shipping() {
      if (isNaN(this.sale.shipping) || this.sale.shipping === "") {
        this.sale.shipping = 0;
      }
    },

    Create_Sale() {
      this.SubmitProcessing = true;
      NProgress.start();
      NProgress.set(0.1);
      const self = this;
      self.data = new FormData();
      self.data.append("date", self.sale.date);
      self.data.append("client_id", self.sale.client_id);
      self.data.append("warehouse_id", self.sale.warehouse_id);
      self.data.append("statut", self.sale.statut);
      self.data.append("notes", self.sale.notes);
      self.data.append("tax_rate", self.sale.tax_rate);
      self.data.append("discount", self.sale.discount);
      self.data.append("shipping", self.sale.shipping);
      self.data.append("products", self.import_products);

      axios
        .post("store_import_sales", self.data)
        .then(response => {
          NProgress.done();
          this.errorMessages = [];
          this.makeToast("success", this.$t("Successfully_Imported"), this.$t("Success"));
          this.SubmitProcessing = false;
          this.$router.push({ name: "index_sales" });
        })
        .catch(error => {
          NProgress.done();
          this.errorMessages = this.collectErrorsFromAxios(error);
          this.makeToast("danger", this.$t("Check_the_error_list_and_fix_your_file") || "Check the error list below and fix your file.", this.$t("Failed"));
          this.SubmitProcessing = false;
        });
    },

    GetElements() {
      axios
        .get("get_import_sales")
        .then(response => {
          this.clients = response.data.clients;
          this.warehouses = response.data.warehouses;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    }
  },
  created() {
    this.GetElements();
  }
};
</script>
