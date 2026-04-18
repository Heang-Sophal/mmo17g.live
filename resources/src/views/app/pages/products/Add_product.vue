<template>
  <div class="main-content">
    <breadcumb :page="$t('AddProduct')" :folder="$t('Products')"/>
    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <validation-observer ref="Create_Product" v-if="!isLoading">
      <b-form @submit.prevent="Submit_Product" enctype="multipart/form-data">
        <!-- Barcode Scanner Modal -->
        <b-modal hide-footer id="open_scan" size="md" :title="$t('Barcode_Scanner')">
          <qrcode-scanner
            :qrbox="250" 
            :fps="10" 
            style="width: 100%; height: calc(100vh - 56px);"
            @result="onScan"
          />
        </b-modal>

        <!-- Quick Add Category Modal -->
        <validation-observer ref="QuickCategory">
          <b-modal
            id="Quick_Add_Category"
            hide-footer
            size="md"
            :title="$t('Add') + ' ' + $t('Categorie')"
          >
            <b-form @submit.prevent="submitQuickCategory">
              <b-row>
                <!-- Code -->
                <b-col md="12">
                  <validation-provider name="Code category" :rules="{ required: true }" v-slot="v">
                    <b-form-group :label="$t('Codecategorie') + ' *'">
                      <b-form-input
                        v-model="quickCategory.code"
                        :placeholder="$t('Enter_Code_category')"
                        :state="getValidationState(v)"
                        aria-describedby="QuickCategoryCode-feedback"
                      />
                      <b-form-invalid-feedback id="QuickCategoryCode-feedback">
                        {{ v.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Name -->
                <b-col md="12">
                  <validation-provider name="Name category" :rules="{ required: true }" v-slot="v">
                    <b-form-group :label="$t('Namecategorie') + ' *'">
                      <b-form-input
                        v-model="quickCategory.name"
                        :placeholder="$t('Enter_name_category')"
                        :state="getValidationState(v)"
                        aria-describedby="QuickCategoryName-feedback"
                      />
                      <b-form-invalid-feedback id="QuickCategoryName-feedback">
                        {{ v.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Submit -->
                <b-col md="12" class="mt-3">
                  <b-button
                    variant="primary"
                    type="submit"
                    :disabled="quickCategorySubmitting"
                  >
                    <i class="i-Yes me-2 font-weight-bold"></i> {{ $t('submit') }}
                  </b-button>
                  <div v-if="quickCategorySubmitting" class="spinner-inline">
                    <div class="spinner sm spinner-primary mt-2"></div>
                  </div>
                </b-col>
              </b-row>
            </b-form>
          </b-modal>
        </validation-observer>

        <!-- Quick Add Brand Modal -->
        <validation-observer ref="QuickBrand">
          <b-modal
            id="Quick_Add_Brand"
            hide-footer
            size="md"
            :title="$t('Add') + ' ' + $t('Brand')"
          >
            <b-form @submit.prevent="submitQuickBrand">
              <b-row>
                <!-- Name -->
                <b-col md="12">
                  <validation-provider name="Name brand" :rules="{ required: true }" v-slot="v">
                    <b-form-group :label="$t('Name') + ' *'">
                      <b-form-input
                        v-model="quickBrand.name"
                        :placeholder="$t('Enter_name_brand')"
                        :state="getValidationState(v)"
                        aria-describedby="QuickBrandName-feedback"
                      />
                      <b-form-invalid-feedback id="QuickBrandName-feedback">
                        {{ v.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Description (optional) -->
                <b-col md="12">
                  <b-form-group :label="$t('Description')">
                    <b-form-textarea
                      v-model="quickBrand.description"
                      :placeholder="$t('Afewwords')"
                      rows="3"
                    />
                  </b-form-group>
                </b-col>

                <!-- Submit -->
                <b-col md="12" class="mt-3">
                  <b-button
                    variant="primary"
                    type="submit"
                    :disabled="quickBrandSubmitting"
                  >
                    <i class="i-Yes me-2 font-weight-bold"></i> {{ $t('submit') }}
                  </b-button>
                  <div v-if="quickBrandSubmitting" class="spinner-inline">
                    <div class="spinner sm spinner-primary mt-2"></div>
                  </div>
                </b-col>
              </b-row>
            </b-form>
          </b-modal>
        </validation-observer>

        <!-- Quick Add Unit Modal -->
        <validation-observer ref="QuickUnit">
          <b-modal
            id="Quick_Add_Unit"
            hide-footer
            size="md"
            :title="$t('Add') + ' ' + $t('UnitProduct')"
          >
            <b-form @submit.prevent="submitQuickUnit">
              <b-row>
                <!-- Name -->
                <b-col md="12">
                  <validation-provider
                    name="Name unit"
                    :rules="{ required: true , max:15}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('Name') + ' ' + '*'">
                      <b-form-input
                        :placeholder="$t('Enter_Name_Unit')"
                        :state="getValidationState(validationContext)"
                        aria-describedby="QuickUnitName-feedback"
                        v-model="quickUnit.name"
                      ></b-form-input>
                      <b-form-invalid-feedback id="QuickUnitName-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- ShortName -->
                <b-col md="12">
                  <validation-provider
                    name="ShortName unit"
                    :rules="{ required: true , max:15}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('ShortName') + ' ' + '*'">
                      <b-form-input
                        :placeholder="$t('Enter_ShortName_Unit')"
                        :state="getValidationState(validationContext)"
                        aria-describedby="QuickUnitShortName-feedback"
                        v-model="quickUnit.ShortName"
                      ></b-form-input>
                      <b-form-invalid-feedback id="QuickUnitShortName-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Base unit -->
                <b-col md="12">
                  <b-form-group :label="$t('BaseUnit')">
                    <v-select
                      @input="Selected_Base_Unit_Quick"
                      v-model="quickUnit.base_unit"
                      :reduce="label => label.value"
                      :placeholder="$t('Choose_Base_Unit')"
                      :options="units_base && units_base.length > 0 ? units_base.map(units_base => ({label: units_base.name, value: units_base.id})) : []"
                    />
                  </b-form-group>
                </b-col>

                <!-- operator  -->
                <b-col md="12" v-show="show_operator_quick">
                  <b-form-group :label="$t('Operator')">
                    <v-select
                      v-model="quickUnit.operator"
                      :reduce="label => label.value"
                      :placeholder="$t('Choose_Operator')"
                      :options="
                            [
                            {label: 'Multiply (*)', value: '*'},
                            {label: 'Divide (/)', value: '/'},
                            ]"
                    ></v-select>
                  </b-form-group>
                </b-col>

                <!-- Operation Value -->
                <b-col md="12" v-show="show_operator_quick">
                  <validation-provider
                    name="Operation Value"
                    :rules="show_operator_quick ? { required: true , regex: /^\d*\.?\d*$/} : {}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('OperationValue') + ' ' + '*'">
                      <b-form-input
                        :placeholder="$t('Enter_Operation_Value')"
                        :state="getValidationState(validationContext)"
                        aria-describedby="QuickUnitOperation-feedback"
                        v-model="quickUnit.operator_value"
                      ></b-form-input>
                      <b-form-invalid-feedback id="QuickUnitOperation-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Submit -->
                <b-col md="12" class="mt-3">
                  <b-button
                    variant="primary"
                    type="submit"
                    :disabled="quickUnitSubmitting"
                  >
                    <i class="i-Yes me-2 font-weight-bold"></i> {{ $t('submit') }}
                  </b-button>
                  <div v-if="quickUnitSubmitting" class="spinner-inline">
                    <div class="spinner sm spinner-primary mt-2"></div>
                  </div>
                </b-col>
              </b-row>
            </b-form>
          </b-modal>
        </validation-observer>

        <b-row>
          <!-- Main Content Column -->
          <b-col lg="12" class="mb-4">
            <!-- ========== SECTION 1: BASIC INFORMATION ========== -->
            <div class="form-section">
              <div class="section-header">
                <i class="i-File section-icon"></i>
                <h4 class="section-title">{{ $t('BasicInformation') }}</h4>
              </div>
              <b-card class="section-card">
                <b-row>
                  <!-- Product Name -->
                  <b-col md="6" class="mb-3">
                    <validation-provider
                      name="Name"
                      :rules="{required:true , min:3 , max:55}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('Name_product') + ' *'">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="Name-feedback"
                          :placeholder="$t('Enter_Name_Product')"
                          v-model="product.name"
                          class="form-control-modern"
                        ></b-form-input>
                        <b-form-invalid-feedback id="Name-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Product Image -->
                  <b-col md="6" class="mb-3">
                    <validation-provider name="Image" ref="Image" rules="mimes:image/*">
                      <b-form-group slot-scope="{validate, valid, errors }" :label="$t('ProductImage')">
                        <div class="image-upload-wrapper">
                          <input
                            :state="errors[0] ? false : (valid ? true : null)"
                            :class="{'is-invalid': !!errors.length}"
                            @change="onFileSelected"
                            type="file"
                            class="form-control-file"
                          >
                          <small class="text-muted d-block mt-2">{{ $t('Supported_formats_JPG_PNG_GIF') }}</small>
                        </div>
                        <b-form-invalid-feedback id="Image-feedback" v-if="errors[0]">{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Barcode Symbology -->
                  <b-col md="6" class="mb-3">
                    <validation-provider name="Barcode Symbology" :rules="{ required: true}">
                      <b-form-group
                        slot-scope="{ valid, errors }"
                        :label="$t('BarcodeSymbology') + ' *'"
                      >
                        <v-select
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          v-model="product.Type_barcode"
                          :reduce="label => label.value"
                          :placeholder="$t('Choose_Symbology')"
                          :options="[
                            {label: 'Code 128', value: 'CODE128'},
                            {label: 'Code 39', value: 'CODE39'},
                            {label: 'EAN8', value: 'EAN8'},
                            {label: 'EAN13', value: 'EAN13'},
                            {label: 'UPC', value: 'UPC'},
                          ]"
                        ></v-select>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Product Code -->
                  <b-col md="6" class="mb-3">
                    <validation-provider name="Code Product" :rules="{ required: true}">
                      <b-form-group
                        slot-scope="{ valid, errors }"
                        :label="$t('CodeProduct') + ' *'"
                      >
                        <div class="input-group modern-input-group">
                          <div class="input-group-prepend">
                            <button type="button" class="btn-icon-scan" @click="showModal" title="Scan">
                              <img src="/assets_setup/scan.png" alt="Scan" class="scan-icon" />
                            </button>
                          </div>
                          <b-form-input
                            :class="{'is-invalid': !!errors.length}"
                            :state="errors[0] ? false : (valid ? true : null)"
                            aria-describedby="CodeProduct-feedback"
                            type="text"
                            v-model="product.code"
                            :placeholder="$t('Enter_Product_Code')"
                          ></b-form-input>
                          <div class="input-group-append">
                            <button type="button" class="btn-icon-gen" @click="generateNumber()" title="Generate">
                              <i class="i-Bar-Code"></i>
                            </button>
                          </div>
                        </div>
                        <small class="text-muted d-block mt-1">{{ $t('Scan_your_barcode_and_select_the_correct_symbology_below') }}</small>
                        <b-alert
                          show
                          variant="danger"
                          class="mt-2 mb-0"
                          v-if="code_exist !=''"
                        >{{ code_exist }}</b-alert>
                        <b-form-invalid-feedback id="CodeProduct-feedback" v-if="errors[0]">{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Category -->
                  <b-col md="6" class="mb-3">
                    <validation-provider name="category" :rules="{ required: true}">
                      <b-form-group
                        slot-scope="{ valid, errors }"
                        :label="$t('Categorie') + ' *'"
                      >
                        <b-input-group class="category-input-group">
                          <v-select
                            :class="{'is-invalid': !!errors.length}"
                            :state="errors[0] ? false : (valid ? true : null)"
                            :reduce="label => label.value"
                            :placeholder="$t('Choose_Category')"
                            v-model="product.category_id"
                            @input="onCategoryChanged"
                            :options="categories.map(c => ({ label: c.name, value: c.id }))"
                          />
                          <b-input-group-append v-if="currentUserPermissions && currentUserPermissions.includes('category')">
                            <b-button
                              variant="primary"
                              @click="openQuickCategoryModal"
                              :title="$t('Add') + ' ' + $t('Categorie')"
                              class="category-add-btn"
                            >
                              <i class="i-Add"></i>
                            </b-button>
                          </b-input-group-append>
                        </b-input-group>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Sub Category (optional) -->
                  <b-col md="6" class="mb-3">
                    <b-form-group :label="$t('SubCategory')">
                      <v-select
                        :placeholder="$t('Choose_Sub_Category')"
                        :reduce="label => label.value"
                        v-model="product.sub_category_id"
                        :options="subcategories.map(sc => ({ label: sc.name, value: sc.id }))"
                      />
                    </b-form-group>
                  </b-col>

                  <!-- Brand -->
                  <b-col md="6" class="mb-3">
                    <b-form-group :label="$t('Brand')">
                      <b-input-group class="brand-input-group">
                        <v-select
                          :placeholder="$t('Choose_Brand')"
                          :reduce="label => label.value"
                          v-model="product.brand_id"
                          :options="brands.map(brands => ({label: brands.name, value: brands.id}))"
                        />
                        <b-input-group-append v-if="currentUserPermissions && currentUserPermissions.includes('brand')">
                          <b-button
                            variant="primary"
                            @click="openQuickBrandModal"
                            :title="$t('Add') + ' ' + $t('Brand')"
                            class="brand-add-btn"
                          >
                            <i class="i-Add"></i>
                          </b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>

                  <!-- Description -->
                  <b-col md="12" class="mb-3">
                    <b-form-group :label="$t('Description')">
                      <textarea
                        rows="4"
                        class="form-control"
                        :placeholder="$t('Afewwords')"
                        v-model="product.note"
                      ></textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-card>
            </div>

            <!-- ========== SECTION 2: INVENTORY ========== -->
            <div class="form-section">
              <div class="section-header">
                <i class="i-Box section-icon"></i>
                <h4 class="section-title">{{ $t('Inventory') }}</h4>
              </div>
              <b-card class="section-card">
                <b-row>
                  <!-- Product Type -->
                  <b-col md="6" class="mb-3">
                    <validation-provider name="Type" :rules="{ required: true}">
                      <b-form-group slot-scope="{ valid, errors }" :label="$t('type') + ' *'">
                        <v-select
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          v-model="product.type"
                          @input="Selected_Type_Product"
                          :reduce="label => label.value"
                          :placeholder="$t('type')"
                          :options="[
                            {label: 'Standard Product', value: 'is_single'},
                            {label: 'Variable Product', value: 'is_variant'},
                            {label: 'Service Product', value: 'is_service'},
                            {label: 'Combo Product', value: 'is_combo'}
                          ]"
                        ></v-select>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Unit Product -->
                  <b-col md="6" class="mb-3" v-if="product.type != 'is_service'">
                    <validation-provider name="Unit Product" :rules="{ required: true}">
                      <b-form-group
                        slot-scope="{ valid, errors }"
                        :label="$t('UnitProduct') + ' *'"
                      >
                        <b-input-group class="unit-input-group">
                          <v-select
                            :class="{'is-invalid': !!errors.length}"
                            :state="errors[0] ? false : (valid ? true : null)"
                            v-model="product.unit_id"
                            @input="Selected_Unit"
                            :placeholder="$t('Choose_Unit_Product')"
                            :reduce="label => label.value"
                            :options="units.map(units => ({label: units.name, value: units.id}))"
                          />
                          <b-input-group-append v-if="currentUserPermissions && currentUserPermissions.includes('unit')">
                            <b-button
                              variant="primary"
                              @click="openQuickUnitModal"
                              :title="$t('Add') + ' ' + $t('UnitProduct')"
                              class="unit-add-btn"
                            >
                              <i class="i-Add"></i>
                            </b-button>
                          </b-input-group-append>
                        </b-input-group>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Unit Sale -->
                  <b-col md="6" class="mb-3" v-if="product.type != 'is_service'">
                    <validation-provider name="Unit Sale" :rules="{ required: true}">
                      <b-form-group
                        slot-scope="{ valid, errors }"
                        :label="$t('UnitSale') + ' *'"
                      >
                        <v-select
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          v-model="product.unit_sale_id"
                          :placeholder="$t('Choose_Unit_Sale')"
                          :reduce="label => label.value"
                          :options="units_sub.map(units_sub => ({label: units_sub.name, value: units_sub.id}))"
                        />
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Unit Purchase -->
                  <b-col md="6" class="mb-3" v-if="product.type != 'is_service'">
                    <validation-provider name="Unit Purchase" :rules="{ required: true}">
                      <b-form-group
                        slot-scope="{ valid, errors }"
                        :label="$t('UnitPurchase') + ' *'"
                      >
                        <v-select
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          v-model="product.unit_purchase_id"
                          :placeholder="$t('Choose_Unit_Purchase')"
                          :reduce="label => label.value"
                          :options="units_sub.map(units_sub => ({label: units_sub.name, value: units_sub.id}))"
                        />
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Stock Alert -->
                  <b-col md="6" class="mb-3" v-if="product.type != 'is_service'">
                    <validation-provider
                      name="Stock Alert"
                      :rules="{ regex: /^\d*\.?\d*$/}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('StockAlert')">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="StockAlert-feedback"
                          placeholder="0"
                          v-model="product.stock_alert"
                        ></b-form-input>
                        <b-form-invalid-feedback id="StockAlert-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Weight -->
                  <b-col md="6" class="mb-3" v-if="product.type != 'is_service'">
                    <validation-provider
                      name="Weight"
                      :rules="{ regex: /^\d*\.?\d*$/}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('Weight')">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="Weight-feedback"
                          placeholder="0.00"
                          v-model="product.weight"
                        ></b-form-input>
                        <b-form-invalid-feedback id="Weight-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Dimensions (in) -->
                  <b-col md="12" class="mb-2" v-if="product.type != 'is_service'">
                    <h6 class="mb-2">{{ $t('Dimensions_in') }}</h6>
                  </b-col>

                  <!-- Length -->
                  <b-col md="4" class="mb-3" v-if="product.type != 'is_service'">
                    <validation-provider
                      name="Length"
                      :rules="{ regex: /^\d*\.?\d*$/}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('Length')">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="Length-feedback"
                          placeholder="0.00"
                          v-model="product.length"
                        ></b-form-input>
                        <b-form-invalid-feedback id="Length-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Width -->
                  <b-col md="4" class="mb-3" v-if="product.type != 'is_service'">
                    <validation-provider
                      name="Width"
                      :rules="{ regex: /^\d*\.?\d*$/}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('Width')">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="Width-feedback"
                          placeholder="0.00"
                          v-model="product.width"
                        ></b-form-input>
                        <b-form-invalid-feedback id="Width-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Height -->
                  <b-col md="4" class="mb-3" v-if="product.type != 'is_service'">
                    <validation-provider
                      name="Height"
                      :rules="{ regex: /^\d*\.?\d*$/}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('Height')">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="Height-feedback"
                          placeholder="0.00"
                          v-model="product.height"
                        ></b-form-input>
                        <b-form-invalid-feedback id="Height-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                </b-row>
              </b-card>
            </div>

            <!-- ========== SECTION 3: VARIANTS (if applicable) ========== -->
            <div class="form-section" v-if="product.type == 'is_variant'">
              <div class="section-header">
                <i class="i-Gear section-icon"></i>
                <h4 class="section-title">{{ $t('Variants') }}</h4>
              </div>
              <b-card class="section-card">
                <div class="variant-input-group mb-3">
                  <b-form-group>
                    <b-input-group>
                      <b-form-input
                        :placeholder="$t('Enter_the_Variant')"
                        v-model="tag"
                        class="form-control-modern"
                      ></b-form-input>
                      <b-input-group-append>
                        <b-button variant="primary" @click="add_variant(tag)">
                          <i class="i-Plus me-2"></i>{{ $t('Add') }}
                        </b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </div>

                <div class="table-responsive" v-if="variants.length > 0">
                  <table class="table table-hover table-modern">
                    <thead>
                      <tr>
                        <th>{{ $t('Code') }}</th>
                        <th>{{ $t('Name') }}</th>
                        <th>{{ $t('Cost') }}</th>
                        <th>{{ $t('Retail Price') }}</th>
                        <th>{{ $t('Wholesale_Price') }}</th>
                        <th>{{ $t('Min_Selling_Price') }}</th>
                        <th class="text-center" style="width: 50px;"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="variant in variants" :key="variant.var_id">
                        <td><b-form-input v-model="variant.code" type="text" size="sm"></b-form-input></td>
                        <td><b-form-input v-model="variant.text" type="text" size="sm"></b-form-input></td>
                        <td><b-form-input v-model="variant.cost" type="text" size="sm"></b-form-input></td>
                        <td><b-form-input v-model="variant.price" type="text" size="sm"></b-form-input></td>
                        <td><b-form-input v-model="variant.wholesale" type="text" size="sm"></b-form-input></td>
                        <td><b-form-input v-model="variant.min_price" type="text" size="sm"></b-form-input></td>
                        <td class="text-center">
                          <b-button
                            variant="danger"
                            size="sm"
                            @click="delete_variant(variant.var_id)"
                            title="Delete"
                          >
                            <i class="i-Close"></i>
                          </b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div v-else class="alert alert-info">
                  {{ $t('NodataAvailable') }}
                </div>
              </b-card>
            </div>

            <!-- ========== SECTION 4: PRICING & TAX ========== -->
            <div class="form-section">
              <div class="section-header">
                <i class="i-Tag section-icon"></i>
                <h4 class="section-title">{{ $t('PricingAndTax') }}</h4>
              </div>
              <b-card class="section-card">
                <b-row>
                  <!-- Product Cost -->
                  <b-col md="6" class="mb-3" v-if="product.type == 'is_single' || product.type == 'is_combo'">
                    <validation-provider
                      name="Product Cost"
                      :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('ProductCost') + ' *'">
                        <b-form-input
                          :state="getValidationState(validationContext)"
                          aria-describedby="ProductCost-feedback"
                          type="text"
                          placeholder="0.00"
                          v-model="product.cost"
                        ></b-form-input>
                        <b-form-invalid-feedback id="ProductCost-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                 <!-- Product Price -->
                <b-col
                  md="6"
                  class="mb-2"
                  v-if="product.type == 'is_single' || product.type == 'is_service' || product.type == 'is_combo'"
                >
                  <validation-provider
                    name="Product Price"
                    :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('Retail Price') + ' *'">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="ProductPrice-feedback"
                        label="Price"
                        :placeholder="$t('Enter_Product_Price')"
                        v-model="product.price"
                      ></b-form-input>

                      <b-form-invalid-feedback
                        id="ProductPrice-feedback"
                      >{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Wholesale Price (optional) -->
                <b-col
                  md="6"
                  class="mb-2"
                  v-if="product.type == 'is_single' || product.type == 'is_service' || product.type == 'is_combo'"
                >
                  <validation-provider
                    name="Wholesale Price"
                    :rules="{ regex: /^\d*\.?\d*$/ }"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('Wholesale_Price')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="WholesalePrice-feedback"
                        :placeholder="$t('Enter_Wholesale_Price')"
                        v-model="product.wholesale_price"
                      ></b-form-input>

                      <b-form-invalid-feedback id="WholesalePrice-feedback">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                <!-- Minimum Selling Price (optional) -->
                <b-col
                  md="6"
                  class="mb-2"
                  v-if="product.type == 'is_single' || product.type == 'is_service' || product.type == 'is_combo'"
                >
                  <validation-provider
                    name="Minimum Selling Price"
                    :rules="{ regex: /^\d*\.?\d*$/ }"
                    v-slot="validationContext"
                  >
                    <b-form-group :label="$t('Minimum_Selling_Price')">
                      <b-form-input
                        :state="getValidationState(validationContext)"
                        aria-describedby="MinPrice-feedback"
                        :placeholder="$t('Enter_Minimum_Selling_Price')"
                        v-model="product.min_price"
                      ></b-form-input>

                      <b-form-invalid-feedback id="MinPrice-feedback">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

                  <!-- Tax Rate -->
                  <b-col md="6" class="mb-3">
                    <validation-provider
                      name="Order Tax"
                      :rules="{regex: /^\d*\.?\d*$/}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('OrderTax')">
                        <b-input-group append="%">
                          <b-form-input
                            :state="getValidationState(validationContext)"
                            aria-describedby="OrderTax-feedback"
                            type="text"
                            placeholder="0"
                            v-model.number="product.TaxNet"
                          ></b-form-input>
                        </b-input-group>
                        <b-form-invalid-feedback id="OrderTax-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Tax Method -->
                  <b-col md="6" class="mb-3">
                    <validation-provider name="Tax Method" :rules="{ required: true}">
                      <b-form-group
                        slot-scope="{ valid, errors }"
                        :label="$t('TaxMethod') + ' *'"
                      >
                        <v-select
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          v-model="product.tax_method"
                          :reduce="label => label.value"
                          :placeholder="$t('Choose_Method')"
                          :options="[
                            {label: 'Exclusive', value: '1'},
                            {label: 'Inclusive', value: '2'}
                          ]"
                        ></v-select>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Discount Method -->
                  <b-col md="6" class="mb-3">
                    <validation-provider name="Discount Method" :rules="{ required: true}">
                      <b-form-group slot-scope="{ valid, errors }" :label="$t('Discount_Method') + ' *'">
                        <v-select
                          v-model="product.discount_method"
                          :reduce="label => label.value"
                          :placeholder="$t('Choose_Method')"
                          :class="{'is-invalid': !!errors.length}"
                          :state="errors[0] ? false : (valid ? true : null)"
                          :options="[
                            {label: 'Percent %', value: '1'},
                            {label: 'Fixed', value: '2'}
                          ]"
                        ></v-select>
                        <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Discount Rate -->
                  <b-col md="6" class="mb-3">
                    <validation-provider
                      name="Discount Rate"
                      :rules="{ required: true , regex: /^\d*\.?\d*$/}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('Discount')">
                        <b-form-input
                          v-model.number="product.discount"
                          :state="getValidationState(validationContext)"
                          aria-describedby="Discount-feedback"
                          placeholder="0.00"
                        ></b-form-input>
                        <b-form-invalid-feedback id="Discount-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>

                  <!-- Points -->
                  <b-col md="6" class="mb-3">
                    <validation-provider
                      name="Points"
                      :rules="{ regex: /^\d*\.?\d*$/}"
                      v-slot="validationContext"
                    >
                      <b-form-group :label="$t('Points')">
                        <b-form-input
                          v-model.number="product.points"
                          :state="getValidationState(validationContext)"
                          aria-describedby="Points-feedback"
                          placeholder="0"
                        ></b-form-input>
                        <b-form-invalid-feedback id="Points-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                </b-row>
              </b-card>
            </div>



            <!-- ========== SECTION 5: COMBO PRODUCTS ========== -->
            <div class="form-section" v-if="product.type == 'is_combo'">
              <div class="section-header">
                <i class="i-Bag section-icon"></i>
                <h4 class="section-title">{{ $t('ComboProducts') }}</h4>
              </div>
              <b-card class="section-card">
                <div class="combo-search mb-3">
                  <b-form-group :label="$t('SearchProduct')">
                    <div class="autocomplete">
                      <input  
                        :placeholder="$t('Scan_Search_Product_by_Code_Name')"
                        @input='e => search_input = e.target.value' 
                        @keyup="search(search_input)" 
                        @focus="handleFocus"
                        @blur="handleBlur" 
                        ref="product_autocomplete" 
                        class="autocomplete-input form-control"
                      />
                      <ul class="autocomplete-result-list" v-show="focused">
                        <li class="autocomplete-result" v-for="product_fil in product_filter" :key="product_fil.id"
                            @mousedown="SearchProduct(product_fil)">{{ getResultValue(product_fil) }}</li>
                      </ul>
                    </div>
                  </b-form-group>
                </div>

                <div class="table-responsive">
                  <table class="table table-hover table-modern">
                    <thead>
                      <tr>
                        <th>{{ $t('ProductName') }}</th>
                        <th>{{ $t('Quantity') }}</th>
                        <th class="text-right">{{ $t('Cost') }}</th>
                        <th class="text-right">{{ $t('SubTotal') }}</th>
                        <th class="text-center" style="width: 50px;"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="materiels.length <= 0">
                        <td colspan="5" class="text-center text-muted">{{ $t('NodataAvailable') }}</td>
                      </tr>
                      <tr v-for="materiel in materiels" :key="materiel.product_id">
                        <td>
                          <div class="badge-wrapper">
                            <span class="badge badge-primary-light">{{ materiel.name }}</span>
                            <br>
                            <small class="text-muted">{{ materiel.code }}</small>
                          </div>
                        </td>
                        <td>
                          <b-input-group :append="materiel.unit_name">
                            <b-form-input 
                              v-model.number="materiel.quantity"
                              min="1"
                              size="sm"
                              style="width: 60px;"
                            ></b-form-input>
                          </b-input-group>
                        </td>
                        <td class="text-right">{{ currentUser.currency }} {{ materiel.cost }}</td>
                        <td class="text-right font-weight-bold">{{ currentUser.currency }} {{ formatNumber(materiel.cost * materiel.quantity, 2) }}</td>
                        <td class="text-center">
                          <b-button
                            variant="danger"
                            size="sm"
                            @click="delete_materiel(materiel.product_id)"
                            title="Delete"
                          >
                            <i class="i-Close"></i>
                          </b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="combo-total mt-3" v-if="materiels.length > 0">
                  <div class="total-row">
                    <span class="total-label">{{ $t('TotalCost') }}</span>
                    <span class="total-value">{{ currentUser.currency }} {{ formatNumber(totalCost, 2) }}</span>
                  </div>
                </div>
              </b-card>
            </div>

            <!-- ========== SECTION 6: WARRANTY ========== -->
            <div class="form-section">
              <div class="section-header">
                <i class="i-Shield section-icon"></i>
                <h4 class="section-title">{{ $t('Warranty_Guarantee_Tracking') }}</h4>
              </div>
              <b-card class="section-card">
                <b-row>
                  <!-- Warranty Period -->
                  <b-col md="6" class="mb-3">
                    <b-form-group :label="$t('Warranty_Period')">
                      <b-input-group>
                        <b-form-input
                          placeholder="0"
                          v-model="product.warranty_period"
                        ></b-form-input>
                        <b-form-select
                          v-model="product.warranty_unit"
                          :options="[
                            { value: 'days', text: $t('Days') },
                            { value: 'months', text: $t('Months') },
                            { value: 'years', text: $t('Years') }
                          ]"
                        ></b-form-select>
                      </b-input-group>
                    </b-form-group>
                  </b-col>

                  <!-- Guarantee Toggle -->
                  <b-col md="6" class="mb-3">
                    <b-form-group>
                      <b-form-checkbox
                        v-model="product.has_guarantee"
                        :unchecked-value="false"
                        :checked-value="true"
                        switch
                      >
                        {{ $t('HasGuarantee') }}
                      </b-form-checkbox>
                    </b-form-group>
                  </b-col>

                  <!-- Warranty Terms -->
                  <b-col md="12" class="mb-3">
                    <b-form-group :label="$t('WarrantyTerms')">
                      <b-form-textarea
                        :placeholder="$t('Enter_warranty_terms')"
                        rows="3"
                        v-model="product.warranty_terms"
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>

                  <!-- Guarantee Period -->
                  <b-col md="6" class="mb-3" v-if="product.has_guarantee">
                    <b-form-group :label="$t('Guarantee_Period')">
                      <b-input-group>
                        <b-form-input
                          placeholder="0"
                          v-model="product.guarantee_period"
                        ></b-form-input>
                        <b-form-select
                          v-model="product.guarantee_unit"
                          :options="[
                            { value: 'days', text: $t('Days') },
                            { value: 'months', text: $t('Months') },
                            { value: 'years', text: $t('Years') }
                          ]"
                        ></b-form-select>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-card>
            </div>

            <!-- ========== SECTION 7: OPENING STOCK ========== -->
            <div class="form-section" v-if="product.type == 'is_single'">
              <div class="section-header">
                <i class="i-Bag section-icon"></i>
                <h4 class="section-title">{{ $t('OpeningStock') }}</h4>
              </div>
              <b-card class="section-card">
                <b-row>
                  <b-col md="6" class="mb-3" v-for="wh in warehouses" :key="wh.id">
                    <b-form-group :label="wh.name">
                      <b-form-input
                        min="0"
                        placeholder="0"
                        v-model.number="product.warehouses[wh.id].qte"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-card>
            </div>

            <!-- ========== SECTION 8: OPTIONS ========== -->
            <div class="form-section">
              <div class="section-header">
                <i class="i-Data-Settings section-icon"></i>
                <h4 class="section-title">{{ $t('Options') }}</h4>
              </div>
              <b-card class="section-card">
                <div class="options-grid">
                  <b-form-group>
                    <b-form-checkbox
                      v-model="product.is_imei"
                      :unchecked-value="false"
                      :checked-value="true"
                      switch
                    >
                      {{ $t('Product_Has_Imei_Serial_number') }}
                    </b-form-checkbox>
                  </b-form-group>

                  <b-form-group>
                    <b-form-checkbox
                      v-model="product.not_selling"
                      :unchecked-value="false"
                      :checked-value="true"
                      switch
                    >
                      {{ $t('This_Product_Not_For_Selling') }}
                    </b-form-checkbox>
                  </b-form-group>

              <b-form-group>
                <b-form-checkbox
                  v-model="product.is_active"
                  :unchecked-value="false"
                  :checked-value="true"
                  switch
                >
                  {{ $t('Active') }}
                </b-form-checkbox>
              </b-form-group>

                  <b-form-group>
                    <b-form-checkbox
                      v-model="product.is_featured"
                      :unchecked-value="false"
                      :checked-value="true"
                      switch
                    >
                      {{ $t('Featured_Product') }}
                    </b-form-checkbox>
                  </b-form-group>

                  <b-form-group>
                    <b-form-checkbox
                      v-model="product.hide_from_online_store"
                      :unchecked-value="false"
                      :checked-value="true"
                      switch
                    >
                      {{ $t('Hide_From_Online_Store') }}
                    </b-form-checkbox>
                  </b-form-group>
                </div>
              </b-card>
            </div>

            <!-- Submit Buttons -->
            <div class="form-actions mt-4">
              <b-button variant="primary" type="submit" :disabled="SubmitProcessing" size="lg">
                <i class="i-Yes me-2 pr-2"></i>{{ $t('submit') }}
              </b-button>
              <div v-if="SubmitProcessing" class="spinner-inline">
                <div class="spinner sm spinner-primary"></div>
              </div>
            </div>
          </b-col>

          <!-- Sidebar - Summary/Info -->
          <b-col lg="4">
            <div class="sticky-sidebar">
            </div>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>
  </div>
</template>


<script>
import VueTagsInput from "@johmun/vue-tags-input";
import NProgress from "nprogress";
import { mapActions, mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "Create Product"
  },
  data() {
    return {
      focused: false,
      timer:null,
      search_input:'',
      product_filter:[],
      warehouses: [],   
      tag: "",
      len: 8,
      change: false,
      isLoading: true,
      SubmitProcessing: false,
      data: new FormData(),
      categories: [],
      quickCategory: {
        name: "",
        code: ""
      },
      quickCategorySubmitting: false,
      quickBrand: {
        name: "",
        description: ""
      },
      quickBrandSubmitting: false,
      quickUnit: {
        name: "",
        ShortName: "",
        base_unit: "",
        operator: "*",
        operator_value: 1
      },
      quickUnitSubmitting: false,
      show_operator_quick: false,
      subcategories: [],
      units: [],
      units_base: [],
      units_sub: [],
      brands: [],
      roles: {},
      variants: [],
      materiels: [],
      products_ing: [],
      product: {
        warehouses: {},
        type: "is_single",
        name: "",
        code: "",
        points: "",
        Type_barcode: "CODE128",
        cost: "",
        price: "",
        wholesale_price: "",
        min_price: "",
        brand_id: "",
        category_id: "",
        sub_category_id: "",
        TaxNet: "0",
        tax_method: "1",
        discount_method: "1",
        discount: "0",
        unit_id: "",
        unit_sale_id: "",
        unit_purchase_id: "",
        stock_alert: "0",
        weight: "",
        length: "",
        width: "",
        height: "",
        image: "",
        note: "",
        is_variant: false,
        is_imei: false,
        not_selling: false,
        is_active: true,
        is_featured: false,
        hide_from_online_store: false,
        warranty_period: null,
        warranty_unit: 'months',
        warranty_terms: '',
        has_guarantee: false,
        guarantee_period: null,
        guarantee_unit: 'months',
      },
      code_exist: ""
    };
  },

  components: {
    VueTagsInput
  },

  computed: {
    ...mapGetters(["currentUserPermissions","currentUser"]),
    totalCost() {
      return this.materiels.reduce((total, materiel) => {
        return total + (materiel.cost * materiel.quantity);
      }, 0);
    }
  },

  methods: {

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

    
      //---------------------- Event Selected_product_type------------------------------\\
      Selected_Type_Product(value) {

        this.products_ing = [];
        if(value == 'is_combo'){
            this.get_products_materiels();
        }
      },


  //---------------------- get_products_materiels------------------------------\\
  get_products_materiels(value) {
  axios
    .get("get_products_materiels")
    .then(({ data }) => (this.products_ing = data));
  },

   // Search Products
   search(){
    if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
    }
    if (this.search_input.length < 1) {
        return this.product_filter= [];
    }
        this.timer = setTimeout(() => {
        const product_filter = this.products_ing.filter(ingredient => ingredient.code === this.search_input);
            if(product_filter.length === 1){
                this.SearchProduct(product_filter[0])
            }else{
                this.product_filter=  this.products_ing.filter(ingredient => {
                return (
                    ingredient.name.toLowerCase().includes(this.search_input.toLowerCase()) ||
                    ingredient.code.toLowerCase().includes(this.search_input.toLowerCase())
                    );
                });
            }
        }, 800);

    },

    // get Result Value Search Products
    getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },

    handleFocus() {
    this.focused = true
  },


  handleBlur() {
    this.focused = false
  },

    //-------------------------- Quick Add Category (modal) --------------------------\\
    openQuickCategoryModal() {
      this.quickCategory = { name: "", code: "" };
      this.$bvModal.show("Quick_Add_Category");
    },

    submitQuickCategory() {
      this.$refs.QuickCategory.validate().then(async success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
          return;
        }

        this.quickCategorySubmitting = true;
        try {
          const payload = {
            name: this.quickCategory.name,
            code: this.quickCategory.code || this.quickCategory.name
          };

          const { data } = await axios.post("categories", payload);
          const newCategory = data && data.category ? data.category : null;

          if (newCategory) {
            this.categories.push(newCategory);
            this.product.category_id = newCategory.id;
          } else {
            await this.refreshCategories();
            const match = this.categories.find(
              c => c.name === payload.name && c.code === payload.code
            );
            if (match) {
              this.product.category_id = match.id;
            }
          }

          this.$bvModal.hide("Quick_Add_Category");
          this.quickCategory = { name: "", code: "" };
          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );
        } catch (e) {
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        } finally {
          this.quickCategorySubmitting = false;
        }
      });
    },

    async refreshCategories() {
      try {
        const { data } = await axios.get("categories?limit=-1");
        if (data && data.categories) {
          this.categories = data.categories;
        }
      } catch (e) {
        // silent refresh failure
      }
    },

    //-------------------------- Quick Add Brand (modal) --------------------------\\
    openQuickBrandModal() {
      this.quickBrand = { name: "", description: "" };
      this.$bvModal.show("Quick_Add_Brand");
    },

    submitQuickBrand() {
      this.$refs.QuickBrand.validate().then(async success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
          return;
        }

        this.quickBrandSubmitting = true;
        try {
          const payload = {
            name: this.quickBrand.name,
            description: this.quickBrand.description || ""
          };

          const { data } = await axios.post("brands", payload);
          const newBrand = data && data.brand ? data.brand : null;

          if (newBrand) {
            this.brands.push(newBrand);
            this.product.brand_id = newBrand.id;
          } else {
            await this.refreshBrands();
            const match = this.brands.find(
              b => b.name === payload.name
            );
            if (match) {
              this.product.brand_id = match.id;
            }
          }

          this.$bvModal.hide("Quick_Add_Brand");
          this.quickBrand = { name: "", description: "" };
          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );
        } catch (e) {
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        } finally {
          this.quickBrandSubmitting = false;
        }
      });
    },

    async refreshBrands() {
      try {
        const { data } = await axios.get("brands?limit=-1");
        if (data && data.brands) {
          this.brands = data.brands;
        }
      } catch (e) {
        // silent refresh failure
      }
    },

    //-------------------------- Quick Add Unit (modal) --------------------------\\
    openQuickUnitModal() {
      this.quickUnit = {
        name: "",
        ShortName: "",
        base_unit: "",
        operator: "*",
        operator_value: 1
      };
      this.show_operator_quick = false;
      
      // Ensure units_base is loaded
      if (!this.units_base || this.units_base.length === 0) {
        this.loadBaseUnits();
      }
      
      this.$bvModal.show("Quick_Add_Unit");
    },

    // Load base units
    loadBaseUnits() {
      axios
        .get("units?page=1&SortField=id&SortType=desc&limit=-1")
        .then(response => {
          if (response.data && response.data.Units_base) {
            this.units_base = response.data.Units_base;
          }
        })
        .catch(() => {
          // silent failure
        });
    },

    Selected_Base_Unit_Quick(value) {
      if (value == null || value == "") {
        this.show_operator_quick = false;
      } else {
        this.show_operator_quick = true;
      }
    },

    submitQuickUnit() {
      this.$refs.QuickUnit.validate().then(async success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
          return;
        }

        this.quickUnitSubmitting = true;
        try {
          // Set base_unit to empty string if null
          const base_unit = this.quickUnit.base_unit || "";
          
          const payload = {
            name: this.quickUnit.name,
            ShortName: this.quickUnit.ShortName,
            base_unit: base_unit,
            operator: this.quickUnit.operator || "*",
            operator_value: this.quickUnit.operator_value || 1
          };

          await axios.post("units", payload);
          
          // Refresh units list and find the newly created unit
          await this.refreshUnits();
          
          // Use $nextTick to ensure the units list is updated
          await this.$nextTick();
          
          // Try to find the newly created unit (with a small retry in case of timing issues)
          let match = this.units.find(
            u => u.name === payload.name && u.ShortName === payload.ShortName
          );
          
          // If not found immediately, wait a bit and try again
          if (!match) {
            await new Promise(resolve => setTimeout(resolve, 300));
            await this.refreshUnits();
            await this.$nextTick();
            match = this.units.find(
              u => u.name === payload.name && u.ShortName === payload.ShortName
            );
          }
          
          if (match) {
            this.product.unit_id = match.id;
            // Trigger Selected_Unit to load sub-units
            this.Selected_Unit(match.id);
          } else {
            // If still not found, show a warning but don't fail
            console.warn("Newly created unit not found in list");
          }

          this.$bvModal.hide("Quick_Add_Unit");
          this.quickUnit = {
            name: "",
            ShortName: "",
            base_unit: "",
            operator: "*",
            operator_value: 1
          };
          this.show_operator_quick = false;
          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );
        } catch (e) {
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        } finally {
          this.quickUnitSubmitting = false;
        }
      });
    },

    async refreshUnits() {
      try {
        const { data } = await axios.get("products/create");
        if (data && data.units) {
          this.units = data.units;
        }
      } catch (e) {
        // silent refresh failure
      }
      
      // Also refresh base units
      this.loadBaseUnits();
    },

    //------------------------------ Event Upload Image -------------------------------\\
    async onFileSelected(e) {
      const { valid } = await this.$refs.Image.validate(e);

      if (valid) {
        this.product.image = e.target.files[0];
      } else {
        this.product.image = "";
      }
    },



  // Submit Search Products
  SearchProduct(result) {
      if (
          this.materiels.length > 0 &&
          this.materiels.some(detail => detail.code === result.code)
      ) {
          toastr.error('Product_Already_added');
          
      } else {

          var materiel_tag = {
              product_id:result.product_id,
              name:result.name,
              code:result.code,
              unit_name:result.unit_name,
              cost:result.cost,
              quantity:1,
          }
          this.materiels.push(materiel_tag);
          
      }
      this.search_input= '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    },


      //-----------------------------------Delete variant------------------------------\\
      delete_materiel(product_id) {

        for (var i = 0; i < this.materiels.length; i++) {
            if (product_id === this.materiels[i].product_id) {
            this.materiels.splice(i, 1);
            }
        }
      },


    showModal() {
      this.$bvModal.show('open_scan');
      
    },

    onScan (decodedText, decodedResult) {
      const code = decodedText;
      this.product.code = code;
      this.$bvModal.hide('open_scan');
    },


     //------ Generate code
     generateNumber() {
      this.code_exist = "";
      this.product.code = Math.floor(
        Math.pow(10, 7) +
          Math.random() *
            (Math.pow(10, 8) - Math.pow(10, 7) - 1)
      );
    },


    //------------- Submit Validation Create Product
    Submit_Product() {
      this.$refs.Create_Product.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {

            if (this.product.type == 'is_variant' && this.variants.length <= 0) {
              this.makeToast("danger", "The variants array is required.", this.$t("Failed"));
            }else{
              this.Create_Product();
            }

        }
      });
    },

    

    add_variant(tag) {
      if (
        this.variants.length > 0 &&
        this.variants.some(variant => variant.text === tag)
      ) {
        this.makeToast(
          "warning",
          this.$t("VariantDuplicate"),
          this.$t("Warning")
        );
      } else {
          if(this.tag != ''){
            var variant_tag = {
              var_id: this.variants.length + 1, // generate unique ID
              text: tag
            };
            this.variants.push(variant_tag);
            this.tag = "";
          }else{

            this.makeToast(
              "warning",
              "Please Enter the Variant",
              this.$t("Warning")
            );
            
          }
      }
    },
    //-----------------------------------Delete variant------------------------------\\
    delete_variant(var_id) {
      
      for (var i = 0; i < this.variants.length; i++) {
        if (var_id === this.variants[i].var_id) {
          this.variants.splice(i, 1);
        }
      }
    },

    //------ Toast
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },

    //------ Validation State
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },


    //-------------- Product Get Elements
    GetElements() {
      axios
        .get("products/create")
        .then(response => {
          this.categories = response.data.categories;
          this.brands = response.data.brands;
          this.units = response.data.units;
          this.warehouses = response.data.warehouses;

            // 2) initialize product.warehouses so each key exists reactively
            response.data.warehouses.forEach(wh => {
              // each wh has { id, name, qte, manage_stock }
              this.$set(this.product.warehouses, wh.id, {
                qte:          wh.qte,
              })
            })

          this.isLoading = false;
        })
        .catch(response => {
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });

      // Get base units for quick add unit modal
      this.loadBaseUnits();
    },

    // Fetch subcategories for a given category (optional on product)
    // keepSelection/targetSubId are mainly used when duplicating a product
    onCategoryChanged(categoryId, keepSelection = false, targetSubId = null) {
      if (!keepSelection) {
        this.product.sub_category_id = "";
      }
      this.subcategories = [];

      if (!categoryId) {
        return;
      }

      axios
        .get(`subcategories/by-category/${categoryId}`)
        .then(({ data }) => {
          this.subcategories = data || [];

          // If we're restoring a known sub-category (e.g. in duplicate mode),
          // re-apply it after options are loaded.
          const desired = targetSubId || this.product.sub_category_id;
          if (keepSelection && desired) {
            const exists = this.subcategories.some(sc => String(sc.id) === String(desired));
            if (exists) {
              this.product.sub_category_id = desired;
            }
          }
        })
        .catch(() => {
          this.subcategories = [];
        });
    },

    //---------------------- Get Sub Units with Unit id ------------------------------\\
    Get_Units_SubBase(value) {
      axios
        .get("get_sub_units_by_base?id=" + value)
        .then(({ data }) => (this.units_sub = data));
    },

    //---------------------- Event Select Unit Product ------------------------------\\
    Selected_Unit(value) {
      this.units_sub = [];
      this.product.unit_sale_id = "";
      this.product.unit_purchase_id = "";
      this.Get_Units_SubBase(value);
    },

    //------------------------------ Create new Product ------------------------------\\
    Create_Product() {
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      var self = this;
      self.SubmitProcessing = true;

      if (self.product.type == 'is_variant' && self.variants.length > 0) {
          self.product.is_variant = true;
      }else{
        self.product.is_variant = false;
      }

       // append array variants
       if (self.materiels.length && self.product.type == 'is_combo') {
        self.data.append("materiels", JSON.stringify(self.materiels));
      }

           
      // append objet product
      Object.entries(self.product).forEach(([key, value]) => {
          self.data.append(key, value);
      });


      // append array variants
      if (self.variants.length) {
        self.data.append("variants", JSON.stringify(self.variants));
      }

      if (Object.keys(self.product.warehouses).length && self.product.type == 'is_single') {
        self.data.append(
          "warehouses",
          JSON.stringify(self.product.warehouses)
        );
      }
   
      // Send Data with axios
      axios
        .post("products", self.data)
        .then(response => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          self.SubmitProcessing = false;
          this.$router.push({ name: "index_products" });
          this.makeToast(
            "success",
            this.$t("Successfully_Created"),
            this.$t("Success")
          );
        })
        .catch(error => {
          // Complete the animation of theprogress bar.
          NProgress.done();
          self.SubmitProcessing = false;
          if (error.errors.code && error.errors.code.length > 0) {
            self.code_exist = error.errors.code[0];
            this.makeToast("danger", error.errors.code[0], this.$t("Failed"));
          }else if(error.errors.variants && error.errors.variants.length > 0){
            this.makeToast("danger", error.errors.variants[0], this.$t("Failed"));
          }else{
            this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
          }

        });
    },

    getProductTypeName(type) {
      switch (type) {
        case 'is_single':
          return this.$t('StandardProduct');
        case 'is_variant':
          return this.$t('VariableProduct');
        case 'is_service':
          return this.$t('ServiceProduct');
        case 'is_combo':
          return this.$t('ComboProduct');
        default:
          return this.$t('Unknown');
      }
    }
  }, //end Methods

  //-----------------------------Created function-------------------

  created: function() {
    this.GetElements();

    // If navigating with ?duplicate=:id, preload product data for duplication
    const duplicateId = this.$route && this.$route.query ? this.$route.query.duplicate : null;
    if (duplicateId) {
      // Load product details using the edit payload to prefill fields without saving
      axios
        .get(`products/${duplicateId}/edit`)
        .then((response) => {
          const p = response.data.product || {};

          // Prefill simple fields (avoid copying internal id)
          this.product.type = p.type || this.product.type;
          this.product.name = p.name || "";
          this.product.code = p.code || "";
          this.product.points = p.points || "";
          this.product.Type_barcode = p.Type_barcode || this.product.Type_barcode;

          this.product.cost = p.cost || "";
          this.product.price = p.price || "";
          this.product.wholesale_price = p.wholesale_price || "";
          this.product.min_price = p.min_price || "";

          this.product.brand_id = p.brand_id || "";
          this.product.category_id = p.category_id || "";
          this.product.TaxNet = p.TaxNet != null ? p.TaxNet : this.product.TaxNet;
          this.product.tax_method = p.tax_method != null ? String(p.tax_method) : this.product.tax_method;
          this.product.discount_method = p.discount_method != null ? String(p.discount_method) : this.product.discount_method;
          this.product.discount = p.discount != null ? String(p.discount) : this.product.discount;

          this.product.unit_id = p.unit_id || "";
          this.product.unit_sale_id = p.unit_sale_id || "";
          this.product.unit_purchase_id = p.unit_purchase_id || "";
          this.product.stock_alert = p.stock_alert != null ? String(p.stock_alert) : this.product.stock_alert;
          this.product.weight = p.weight != null ? String(p.weight) : this.product.weight;
          this.product.length = p.length != null ? String(p.length) : this.product.length;
          this.product.width = p.width != null ? String(p.width) : this.product.width;
          this.product.height = p.height != null ? String(p.height) : this.product.height;

          this.product.note = p.note || "";
          this.product.is_imei = !!p.is_imei;
          this.product.not_selling = !!p.not_selling;
          this.product.is_featured = !!p.is_featured;
          this.product.hide_from_online_store = !!p.hide_from_online_store;

          // Warranty / Guarantee
          this.product.warranty_period = p.warranty_period != null ? p.warranty_period : null;
          this.product.warranty_unit = p.warranty_unit || this.product.warranty_unit;
          this.product.warranty_terms = p.warranty_terms || '';
          this.product.has_guarantee = !!p.has_guarantee;
          this.product.guarantee_period = p.guarantee_period != null ? p.guarantee_period : null;
          this.product.guarantee_unit = p.guarantee_unit || this.product.guarantee_unit;

          // If base unit exists, load sub-units and then set sale/purchase units
          if (this.product.unit_id) {
            const targetSaleId = p.unit_sale_id || "";
            const targetPurchaseId = p.unit_purchase_id || "";
            axios
              .get("get_sub_units_by_base?id=" + this.product.unit_id)
              .then(({ data }) => {
                this.units_sub = data;
                this.product.unit_sale_id = targetSaleId || "";
                this.product.unit_purchase_id = targetPurchaseId || "";
              })
              .catch(() => {});
          }

          // Handle sub-category for duplicate:
          // 1) remember original sub_category_id
          // 2) load subcategories for the chosen category
          // 3) re-apply sub_category_id once options are ready
          const targetSubId = p.sub_category_id || "";
          if (this.product.category_id && targetSubId) {
            this.onCategoryChanged(this.product.category_id, true, targetSubId);
          } else if (this.product.category_id) {
            // ensure the subcategory list is populated even if none was set
            this.onCategoryChanged(this.product.category_id, false, null);
          }

          // Prefill variants (if any)
          if (Array.isArray(p.ProductVariant) && p.ProductVariant.length) {
            this.variants = p.ProductVariant.map((v, idx) => ({
              var_id: v.var_id != null ? v.var_id : idx + 1,
              text: v.text,
              code: v.code,
              cost: v.cost,
              price: v.price,
              wholesale: v.wholesale != null ? v.wholesale : '',
              min_price: v.min_price != null ? v.min_price : ''
            }));
          } else {
            this.variants = [];
          }

          // Prefill combo materiels
          if (this.product.type === 'is_combo' && Array.isArray(response.data.materiels)) {
            this.materiels = response.data.materiels.slice();
          }
        })
        .catch(() => {
          // Fail silently; user can still create product manually
        });
    }

  }
};
</script>

<style>
  .scan-icon {
    width: 43px;
    height: 34px;
    margin-right: 8px;
    cursor: pointer;
  }

  /* ===== Form Sections ===== */
  .form-section {
    margin-bottom: 2rem;
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #f0f0f0;
  }

  .section-icon {
    font-size: 1.5rem;
    color: #667eea;
    margin-right: 0.75rem;
    width: 28px;
    text-align: center;
  }

  .section-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
    letter-spacing: -0.3px;
  }

  .section-card {
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
  }

  .section-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  /* ===== Form Controls ===== */
  .form-control-modern {
    border-radius: 8px;
    border: 1.5px solid #e0e0e0;
    padding: 0.625rem 0.875rem;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .form-control-modern:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .form-control-file {
    display: block;
    padding: 0.5rem 0;
    border-radius: 8px;
    cursor: pointer;
  }

  .image-upload-wrapper {
    background: #fafafa;
    padding: 1rem;
    border-radius: 8px;
    border: 2px dashed #d0d0d0;
    transition: all 0.2s ease;
  }

  .image-upload-wrapper:hover {
    border-color: #667eea;
    background: #f5f7ff;
  }

  /* ===== Input Groups ===== */
  .modern-input-group {
    display: flex;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    border: 1.5px solid #e0e0e0;
  }

  .btn-icon-scan,
  .btn-icon-gen {
    background: #f5f5f5;
    border: none;
    padding: 0.625rem 0.875rem;
    color: #667eea;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-icon-scan:hover,
  .btn-icon-gen:hover {
    background: #667eea;
    color: white;
  }

  /* ===== Tables ===== */
  .table-modern {
    margin-bottom: 0;
  }

  .table-modern thead {
    background: #f8f9fa;
    border-bottom: 2px solid #e0e0e0;
  }

  .table-modern thead th {
    font-weight: 600;
    color: #333;
    padding: 1rem 0.875rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }

  .table-modern tbody tr {
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.2s ease;
  }

  .table-modern tbody tr:hover {
    background-color: #f9f9f9;
  }

  .table-modern td {
    padding: 1rem 0.875rem;
    vertical-align: middle;
  }

  /* ===== Variant Input ===== */
  .variant-input-group {
    background: #f5f7ff;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #e0e8ff;
  }

  /* ===== Combo Section ===== */
  .combo-search {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
  }

  .autocomplete {
    position: relative;
  }

  .autocomplete-input {
    width: 100%;
    padding: 0.625rem 2.875rem;
    border-radius: 8px;
    border: 1.5px solid #e0e0e0;
    font-size: 0.95rem;
  }

  .autocomplete-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .autocomplete-result-list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #e0e0e0;
    border-top: none;
    border-radius: 0 0 8px 8px;
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 250px;
    overflow-y: auto;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .autocomplete-result {
    padding: 0.75rem 3rem;
    cursor: pointer;
    transition: background-color 0.15s ease;
  }

  .autocomplete-result:hover {
    background-color: #f5f7ff;
    color: #667eea;
  }

  .badge-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .badge-primary-light {
    background-color: #e0e8ff;
    color: #667eea;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-weight: 600;
    display: inline-block;
    width: fit-content;
  }

  .combo-total {
    background: #f8f9fa;
    padding: 1.25rem;
    border-radius: 8px;
    border-left: 4px solid #667eea;
  }

  .total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .total-label {
    font-weight: 600;
    color: #333;
    font-size: 1rem;
  }

  .total-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #667eea;
  }

  /* ===== Options Grid ===== */
  .options-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  /* ===== Form Actions ===== */
  .form-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .spinner-inline {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  /* ===== Sidebar ===== */
  .sticky-sidebar {
    position: sticky;
    top: 20px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .summary-card,
  .help-card {
    background: white;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .summary-title,
  .help-title {
    margin: 0 0 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: #1a1a1a;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #f0f0f0;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #f5f5f5;
  }

  .summary-item:last-child {
    border-bottom: none;
  }

  .summary-label {
    font-size: 0.85rem;
    color: #666;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .summary-value {
    font-size: 1rem;
    font-weight: 700;
    color: #667eea;
  }

  /* ===== v-select in input-group ===== */
  .category-input-group,
  .brand-input-group,
  .unit-input-group {
    display: flex;
    align-items: stretch;
  }

  .category-input-group .v-select,
  .brand-input-group .v-select,
  .unit-input-group .v-select {
    flex: 1 1 auto;
    min-width: 0;
  }

  .category-input-group .v-select .vs__dropdown-toggle,
  .brand-input-group .v-select .vs__dropdown-toggle,
  .unit-input-group .v-select .vs__dropdown-toggle {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 100%;
  }

  .category-input-group .v-select .vs__dropdown-toggle,
  .category-input-group .v-select .vs__dropdown-toggle .vs__selected-options,
  .brand-input-group .v-select .vs__dropdown-toggle,
  .brand-input-group .v-select .vs__dropdown-toggle .vs__selected-options,
  .unit-input-group .v-select .vs__dropdown-toggle,
  .unit-input-group .v-select .vs__dropdown-toggle .vs__selected-options {
    height: 100%;
  }

  .category-add-btn,
  .brand-add-btn,
  .unit-add-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    white-space: nowrap;
  }

  /* ===== Responsive ===== */
  @media (max-width: 768px) {
    .sticky-sidebar {
      position: relative;
      top: 0;
    }

    .options-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
