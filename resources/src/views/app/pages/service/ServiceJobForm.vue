<template>
  <div class="main-content">
    <breadcumb
      :page="isEdit ? $t('Edit_Service_Job') : $t('Create_Service_Job')"
      :folder="$t('Service_Maintenance')"
    />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else class="card">
      <div class="card-body">
        <validation-observer ref="Create_Service_Job">
          <b-form @submit.prevent="submit">
            <b-row>
              <b-col md="4">
                <validation-provider
                  name="Customer"
                  :rules="{ required: true }"
                  v-slot="validationContext"
                >
                  <b-form-group :label="$t('Customer') + ' ' + '*'">
                    <v-select
                      :reduce="c => c.id"
                      v-model="form.client_id"
                      :options="clients"
                      label="name"
                      :placeholder="$t('Choose_Customer')"
                      :class="{ 'is-invalid': validationContext.errors.length > 0 }"
                    />
                    <b-form-invalid-feedback>{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>

              <b-col md="4">
                <b-form-group :label="$t('Technician')">
                  <v-select
                    :reduce="t => t.id"
                    v-model="form.technician_id"
                    :options="technicians"
                    label="full_name"
                    :placeholder="$t('Choose_Technician')"
                  />
                </b-form-group>
              </b-col>

              <b-col md="4">
                <validation-provider
                  name="Service Item"
                  :rules="{ required: true }"
                  v-slot="validationContext"
                >
                  <b-form-group :label="$t('Service_Item') + ' ' + '*'">
                    <b-form-input
                      v-model="form.service_item"
                      :state="getValidationState(validationContext)"
                      aria-describedby="service-item-feedback"
                      :placeholder="$t('Service_Item')"
                    />
                    <b-form-invalid-feedback id="service-item-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </b-col>

            <b-col md="4">
              <b-form-group :label="$t('Job_Type')">
                <b-form-input v-model="form.job_type" />
              </b-form-group>
            </b-col>

            <b-col md="4">
              <b-form-group :label="$t('Status')">
                <b-form-select v-model="form.status" :options="statusOptions" />
              </b-form-group>
            </b-col>

            <b-col md="4">
              <b-form-group :label="$t('Scheduled_Date')">
                <b-form-input v-model="form.scheduled_date" type="date" />
              </b-form-group>
            </b-col>

            <b-col md="12">
              <b-form-group :label="$t('Notes')">
                <b-form-textarea v-model="form.notes" rows="3" />
              </b-form-group>
            </b-col>
          </b-row>

          <h5 class="mt-4 mb-2">{{ $t('Checklist') }}</h5>
          <b-row>
            <b-col md="12" v-if="checklistItems.length === 0">
              <p class="text-muted">{{ $t('No_checklist_items_defined') }}</p>
            </b-col>

            <b-col
              v-for="item in checklistItems"
              :key="item.id"
              md="4"
              class="mt-3 mb-3"
            >
              <label class="switch switch-primary mr-3">
                {{ item.name }}
                <input type="checkbox" v-model="checklistState[item.id]">
                <span class="slider"></span>
              </label>
            </b-col>
          </b-row>

            <div class="mt-4 text-right">
              <b-button variant="secondary" class="mr-2" @click="$router.back()">
                {{ $t('Cancel') }}
              </b-button>
              <b-button variant="primary" type="submit" :disabled="SubmitProcessing">
                {{ $t('Save') }}
              </b-button>
              <div v-once class="typo__p" v-if="SubmitProcessing">
                <div class="spinner sm spinner-primary mt-3"></div>
              </div>
            </div>
          </b-form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceJobForm',
  data() {
    return {
      isLoading: true,
      isEdit: false,
      SubmitProcessing: false,
      form: {
        client_id: null,
        technician_id: null,
        service_item: '',
        job_type: '',
        status: 'pending',
        scheduled_date: '',
        notes: ''
      },
      clients: [],
      technicians: [],
      checklistCategories: [],
      checklistItems: [],
      checklistState: {},
      statusOptions: [
        { value: 'pending', text: 'Pending' },
        { value: 'in_progress', text: 'In Progress' },
        { value: 'completed', text: 'Completed' },
        { value: 'cancelled', text: 'Cancelled' }
      ]
    };
  },
  computed: {
    jobId() {
      return this.$route.params.id ? Number(this.$route.params.id) : null;
    }
  },
  async mounted() {
    this.isEdit = !!this.jobId;
    await this.loadMeta();
    // Load categories first to get category names for items
    const { data: categoriesData } = await axios.get('service_checklist/categories');
    this.checklistCategories = categoriesData.categories || [];
    await this.loadChecklist();
    await this.loadJobIfNeeded();
    this.isLoading = false;
  },
  methods: {
    async loadMeta() {
      const { data } = await axios.get('service_jobs/create');
      this.clients = (data.clients || []).map(c => ({
        id: c.id,
        name: c.name
      }));
      this.technicians = (data.technicians || []).map(t => ({
        id: t.id,
        full_name: t.name || `#${t.id}`
      }));
    },
    async loadChecklist() {
      // Load all checklist items
      const { data } = await axios.get('service_checklist/items');
      this.checklistItems = (data.items || []).map(item => {
        // Find category name for each item
        const category = this.checklistCategories.find(cat => cat.id === item.category_id);
        return {
          id: item.id,
          name: item.name,
          category_id: item.category_id,
          category_name: category ? category.name : null
        };
      });
      
      // Initialize checklist state if creating
      if (!this.isEdit) {
        this.checklistItems.forEach(item => {
          this.checklistState[item.id] = false;
        });
      }
    },
    async loadJobIfNeeded() {
      if (!this.jobId) return;
      const { data } = await axios.get(`service_jobs/${this.jobId}`);
      const job = data.job || {};
      this.form.client_id = job.client_id || null;
      this.form.technician_id = job.technician_id || null;
      this.form.service_item = job.service_item || '';
      this.form.job_type = job.job_type || '';
      this.form.status = job.status || 'pending';
      this.form.scheduled_date = job.scheduled_date || '';
      this.form.notes = job.notes || '';
      // hydrate checklist
      (data.checklist || []).forEach(row => {
        if (row.item_id) {
          this.checklistState[row.item_id] = !!row.is_completed;
        }
      });
    },
    buildChecklistPayload() {
      const payload = [];
      this.checklistItems.forEach(item => {
        payload.push({
          category_id: item.category_id,
          category_name: item.category_name || '',
          item_id: item.id,
          item_name: item.name,
          is_completed: !!this.checklistState[item.id]
        });
      });
      return payload;
    },
    //------------- Submit Validation Create Service Job
    submit() {
      this.$refs.Create_Service_Job.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Submit_Service_Job();
        }
      });
    },

    //---------------------------------------- Create/Update Service Job -------------------------------\\
    async Submit_Service_Job() {
      this.SubmitProcessing = true;
      const payload = {
        ...this.form,
        checklist: this.buildChecklistPayload()
      };
      
      try {
        if (this.isEdit) {
          await axios.put(`service_jobs/${this.jobId}`, payload);
        } else {
          await axios.post('service_jobs', payload);
        }
        this.makeToast(
          "success",
          this.isEdit ? this.$t("Successfully_Updated") : this.$t("Successfully_Created"),
          this.$t("Success")
        );
        this.SubmitProcessing = false;
        this.$router.push({ name: 'service_jobs_index' });
      } catch (error) {
        this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        this.SubmitProcessing = false;
      }
    },

    //------ Event Validation State
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
    }
  }
};
</script>


