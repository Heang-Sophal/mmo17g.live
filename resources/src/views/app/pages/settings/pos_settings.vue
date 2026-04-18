<template>
  <div class="main-content">
    <breadcumb :page="$t('Pos_Settings')" :folder="$t('Settings')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

     <!-- POS behaviour / display Settings (same as System Settings -> POS Settings tab) -->
    <validation-observer ref="Submit_Pos_Settings" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Pos_Settings">
        <b-row class="mt-5">
          <b-col lg="12" md="12" sm="12">
            <b-card no-body :header="$t('Pos_Settings')">
              <b-card-body>
                <b-row>
                  <!-- Quick Add Customer -->
                  <b-col md="4" class="mt-3 mb-3">
                    <label class="switch switch-primary mr-3">
                      {{$t('Quick_Add_Customer')}}
                      <input type="checkbox" v-model="pos_settings.quick_add_customer">
                      <span class="slider"></span>
                    </label>
                    <small class="text-muted d-block mt-2">
                      {{$t('Enable_Quick_Add_Customer_popup_in_POS')}}
                    </small>
                  </b-col>

                  <!-- Barcode Scanning Sound -->
                  <b-col md="4" class="mt-3 mb-3">
                    <label class="switch switch-primary mr-3">
                      {{$t('Barcode_Scanning_Sound')}}
                      <input type="checkbox" v-model="pos_settings.barcode_scanning_sound">
                      <span class="slider"></span>
                    </label>
                    <small class="text-muted d-block mt-2">
                      {{$t('Enable_sound_when_scanning_barcodes_in_POS')}}
                    </small>
                  </b-col>

                  <!-- Show Product Images in POS -->
                  <b-col md="4" class="mt-3 mb-3">
                    <label class="switch switch-primary mr-3">
                      {{$t('Show_Product_Images_in_POS')}}
                      <input type="checkbox" v-model="pos_settings.show_product_images">
                      <span class="slider"></span>
                    </label>
                    <small class="text-muted d-block mt-2">
                      {{$t('Show_hide_product_images_in_POS_product_listing')}}
                    </small>
                  </b-col>

                  <!-- Show Stock Quantity in POS -->
                  <b-col md="4" class="mt-3 mb-3">
                    <label class="switch switch-primary mr-3">
                      {{$t('Show_Stock_Quantity_in_POS')}}
                      <input type="checkbox" v-model="pos_settings.show_stock_quantity">
                      <span class="slider"></span>
                    </label>
                    <small class="text-muted d-block mt-2">
                      {{$t('Show_hide_stock_quantity_in_POS')}}
                    </small>
                  </b-col>

                  <!-- Enable Print Invoice automatically -->
                  <b-col md="4" class="mt-3 mb-3">
                    <label class="switch switch-primary mr-3">
                      {{$t('Enable_Print_Invoice')}}
                      <input
                        type="checkbox"
                        v-model="pos_settings.is_printable"
                        :true-value="1"
                        :false-value="0"
                      >
                      <span class="slider"></span>
                    </label>
                  </b-col>

                

                  <!-- Enable Hold Sales -->
                  <b-col md="4" class="mt-3 mb-3">
                    <label class="switch switch-primary mr-3">
                      {{$t('Enable_Hold_Sales')}}
                      <input type="checkbox" v-model="pos_settings.enable_hold_sales">
                      <span class="slider"></span>
                    </label>
                    <small class="text-muted d-block mt-2">
                      {{$t('Enable_disable_Hold_Sales_feature_in_POS')}}
                    </small>
                  </b-col>

                  <!-- Enable Customer Points in POS -->
                  <b-col md="4" class="mt-3 mb-3">
                    <label class="switch switch-primary mr-3">
                      {{$t('Enable_Customer_Points_in_POS')}}
                      <input type="checkbox" v-model="pos_settings.enable_customer_points">
                      <span class="slider"></span>
                    </label>
                    <small class="text-muted d-block mt-2">
                      {{$t('Enable_disable_customer_points_system_in_POS')}}
                    </small>
                  </b-col>

                  <!-- Show Categories in POS -->
                  <b-col md="4" class="mt-3 mb-3">
                    <label class="switch switch-primary mr-3">
                      {{$t('Show_Categories_in_POS')}}
                      <input type="checkbox" v-model="pos_settings.show_categories">
                      <span class="slider"></span>
                    </label>
                    <small class="text-muted d-block mt-2">
                      {{$t('Show_hide_categories_in_POS')}}
                    </small>
                  </b-col>

                  <!-- Show Brands in POS -->
                  <b-col md="4" class="mt-3 mb-3">
                    <label class="switch switch-primary mr-3">
                      {{$t('Show_Brands_in_POS')}}
                      <input type="checkbox" v-model="pos_settings.show_brands">
                      <span class="slider"></span>
                    </label>
                    <small class="text-muted d-block mt-2">
                      {{$t('Show_hide_brands_in_POS')}}
                    </small>
                  </b-col>

                  <!-- Products per page in POS -->
                  <b-col lg="6" md="6" sm="12" class="mt-3 mb-3">
                    <validation-provider
                      name="products_per_page"
                      :rules="{ required: true }"
                      v-slot="validationContext"
                    >
                      <b-form-group label="How many items do you want to display in POS *">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="products_per_page-feedback"
                          label="How many items do you want to display in POS."
                          placeholder="How many items do you want to display in POS."
                          v-model="pos_settings.products_per_page"
                          type="text"
                        ></b-form-input>
                        <b-form-invalid-feedback id="products_per_page-feedback">
                          {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                    <!-- Invoice format: Thermal vs A4 -->
                    <b-col lg="12" md="12" sm="12" class="mb-3">
                    <b-form-group :label="$t('Invoice_Format')">
                      <b-form-radio-group
                        v-model="invoice_format"
                        :options="invoiceFormatOptions.map(opt => ({ value: opt.value, text: $t(opt.textKey) }))"
                        buttons
                        button-variant="outline-primary"
                        size="sm"
                      />
                      <small class="text-muted d-block mt-1">
                        {{ $t('Invoice_Format_help') }}
                      </small>
                    </b-form-group>
                  </b-col>

                  <!-- Submit -->
                  <b-col md="12" class="mt-4">
                    <div class="d-flex justify-content-end">
                      <b-button variant="primary" type="submit" size="lg">
                        {{$t('submit')}}
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "POS Settings"
  },
  data() {
    return {
      
      isLoading: true,
     
      pos_settings:{
        note_customer:"",
        show_logo: "",
        show_store_name: "",
        show_reference: "",
        show_date: "",
        show_seller: "",
        show_note:"",
        show_barcode:"",
        show_discount:"",
        show_tax:"",
        show_shipping:"",
        show_phone:"",
        show_email:"",
        show_address:"",
        show_customer:"",
        show_Warehouse:"",
        is_printable:'',
        products_per_page:'',
        receipt_layout: 1,
        receipt_paper_size: 80,
        show_paid: "",
        show_due: "",
        show_payments: "",
        show_zatca_qr: "",
        // POS behaviour/display settings (from System Settings -> POS Settings tab)
        quick_add_customer: false,
        barcode_scanning_sound: false,
        show_product_images: false,
        show_stock_quantity: false,
        enable_hold_sales: false,
        enable_customer_points: false,
        show_categories: false,
        show_brands: false,
      },

      // Preferred invoice format for POS printing ('thermal' or 'a4')
      invoice_format: "thermal",
      invoiceFormatOptions: [
        { value: "thermal", textKey: "Invoice_Thermal" },
        { value: "a4", textKey: "Invoice_A4" },
      ],

    };
  },

  computed: {
    ...mapGetters(["currentUser"]),

    // Normalize POS receipt layout selection (1, 2, or 3) for demo preview
    currentReceiptLayout() {
      const raw = this.pos_settings && this.pos_settings.receipt_layout != null
        ? this.pos_settings.receipt_layout
        : 1;
      const n = Number(raw) || 1;
      return [1, 2, 3].includes(n) ? n : 1;
    },
  },

  methods: {
    ...mapActions(["refreshUserPermissions"]),

     //------------- Submit Validation Pos Setting
    Submit_Pos_Settings() {
      this.$refs.Submit_Pos_Settings.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Update_Pos_Settings();
        }
      });
    },

    //------ Toast
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    //---------------------------------- Update_Pos_Settings ----------------\\
    Update_Pos_Settings() {
      NProgress.start();
      NProgress.set(0.1);
      axios
        .put("pos_settings/" + this.pos_settings.id, {
          note_customer: this.pos_settings.note_customer,
          show_logo: this.pos_settings.show_logo,
          logo_size: this.pos_settings.logo_size,
          show_store_name: this.pos_settings.show_store_name,
          show_reference: this.pos_settings.show_reference,
          show_date: this.pos_settings.show_date,
          show_seller: this.pos_settings.show_seller,
          show_note: this.pos_settings.show_note,
          show_barcode: this.pos_settings.show_barcode,
          show_discount: this.pos_settings.show_discount,
          show_tax: this.pos_settings.show_tax,
          show_shipping: this.pos_settings.show_shipping,
          show_phone: this.pos_settings.show_phone,
          show_email: this.pos_settings.show_email,
          show_address: this.pos_settings.show_address,
          show_customer: this.pos_settings.show_customer,  
          show_Warehouse: this.pos_settings.show_Warehouse,  
          is_printable: this.pos_settings.is_printable,
          receipt_paper_size: this.pos_settings.receipt_paper_size,
          show_paid: this.pos_settings.show_paid,
          show_due: this.pos_settings.show_due,
          show_payments: this.pos_settings.show_payments,
          show_zatca_qr: this.pos_settings.show_zatca_qr,
          products_per_page: this.pos_settings.products_per_page,
          receipt_layout: this.pos_settings.receipt_layout,
          quick_add_customer: this.pos_settings.quick_add_customer,
          barcode_scanning_sound: this.pos_settings.barcode_scanning_sound,
          show_product_images: this.pos_settings.show_product_images,
          show_stock_quantity: this.pos_settings.show_stock_quantity,
          enable_hold_sales: this.pos_settings.enable_hold_sales,
          enable_customer_points: this.pos_settings.enable_customer_points,
          show_categories: this.pos_settings.show_categories,
          show_brands: this.pos_settings.show_brands,
          invoice_format: this.invoice_format,
        })
        .then(response => {
          Fire.$emit("Event_Pos_Settings");
          this.makeToast(
            "success",
            this.$t("Successfully_Updated"),
            this.$t("Success")
          );
          NProgress.done();
        })
        .catch(error => {
          NProgress.done();
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },

    // Print the live POS receipt demo using the same print CSS as real POS receipts
    printPosDemo() {
      try {
        const el = document.getElementById("pos-receipt-demo");
        if (!el) return;
        const divContents = el.innerHTML;
        const w = window.open("", "", "height=600,width=400");
        w.document.write('<html><head>');
        w.document.write('<link rel="stylesheet" href="/css/pos_print.css">');
        w.document.write("</head><body>");
        w.document.write(divContents);
        w.document.write("</body></html>");
        w.document.close();
        setTimeout(() => {
          w.print();
        }, 500);
      } catch (e) {
        // silently ignore print errors in settings preview
      }
    },


 //---------------------------------- Get_pos_Settings ----------------\\ 
    get_pos_Settings() {
      axios
        .get("get_pos_Settings_api")
        .then(response => {
          this.pos_settings = response.data.pos_settings;
          this.isLoading = false;
        })
        .catch(error => {
          this.isLoading = false;
        });
    },

    //---------------------------------- Get global SETTINGS (for invoice_format) ----------------\\
    Get_Settings() {
      axios
        .get("get_Settings_data")
        .then(response => {
          const settings = (response && response.data && response.data.settings) || {};
          const raw = settings.invoice_format;
          if (typeof raw === "string" && ["thermal", "a4"].includes(raw)) {
            this.invoice_format = raw;
          } else {
            this.invoice_format = "thermal";
          }
        })
        .catch(error => {
          // Silent fail – POS Settings page will fall back to default 'thermal'
        });
    },

   
  }, //end Methods

  //----------------------------- Created function-------------------

  created: function() {
    this.get_pos_Settings();
    this.Get_Settings();

    Fire.$on("Event_Pos_Settings", () => {
      this.get_pos_Settings();
      this.Get_Settings();
    });

  }
};
</script>

<style scoped>
.pos-receipt-demo {
  /* Approximate 88mm receipt width at 96dpi: ~332px */
  width: 330px;
  max-width: 100%;
  margin: 0 auto;
  background: #ffffff;
  padding: 10px;
  border: 1px dashed #dee2e6;
  font-size: 11px;
}

.pos-receipt-demo .info {
  text-align: center;
}

.pos-receipt-demo .table_data {
  width: 100%;
}
</style>