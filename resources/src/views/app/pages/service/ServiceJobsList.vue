<template>
  <div class="main-content">
    <breadcumb :page="$t('Service_Jobs')" :folder="$t('Service_Maintenance')" />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else class="page-wrapper">
      <div class="control-bar mb-3 d-flex justify-content-between">
        <div />
        <div>
          <router-link to="/app/service/jobs/create" class="btn btn-primary btn-sm">
            <i class="i-Add mr-1"></i>{{ $t('Add') }}
          </router-link>
        </div>
      </div>

      <div class="table-card">
        <vue-good-table
          mode="remote"
          :columns="columns"
          :totalRows="totalRows"
          :rows="jobs"
          @on-page-change="onPageChange"
          @on-per-page-change="onPerPageChange"
          @on-sort-change="onSortChange"
          @on-search="onSearch"
          :search-options="{ enabled: true, placeholder: $t('Search_this_table') }"
          :pagination-options="{ enabled: true, mode: 'records' }"
          styleClass="tableOne vgt-table"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'actions'">
              <router-link
                :to="`/app/service/jobs/details/${props.row.id}`"
                class="btn btn-sm btn-outline-info mr-2"
                :title="$t('View_Details') || 'View Details'"
              >
                <i class="i-Eye"></i>
              </router-link>
              <router-link
                :to="`/app/service/jobs/edit/${props.row.id}`"
                class="btn btn-sm btn-outline-primary mr-2"
                :title="$t('Edit') || 'Edit'"
              >
                <i class="i-Edit"></i>
              </router-link>
              <b-button
                size="sm"
                variant="outline-danger"
                @click.stop="deleteJob(props.row)"
                :title="$t('Delete') || 'Delete'"
              >
                <i class="i-Close-Window"></i>
              </b-button>
            </span>
            <span v-else-if="props.column.field === 'status'">
              <span
                v-if="props.row.status === 'completed'"
                class="badge badge-outline-success"
              >{{ $t('complete') }}</span>
              <span
                v-else-if="props.row.status === 'in_progress'"
                class="badge badge-outline-primary"
              >{{ $t('In_Progress') }}</span>
              <span
                v-else-if="props.row.status === 'cancelled'"
                class="badge badge-outline-danger"
              >{{ $t('Cancelled') }}</span>
              <span
                v-else
                class="badge badge-outline-info"
              >{{ $t('Pending') }}</span>
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceJobsList',
  data() {
    return {
      isLoading: true,
      jobs: [],
      totalRows: 0,
      serverParams: {
        sort: { field: 'Ref', type: 'desc' },
        page: 1,
        perPage: 10,
        searchTerm: ''
      },
      columns: [
        { label: this.$t('Reference') || 'Reference', field: 'Ref' },
        { label: this.$t('Customer'), field: 'client_name' },
        { label: this.$t('Service_Item'), field: 'service_item' },
        { label: this.$t('Job_Type'), field: 'job_type' },
        { label: this.$t('Technician'), field: 'technician_name' },
        { label: this.$t('Scheduled_Date'), field: 'scheduled_date' },
        { label: this.$t('Status'), field: 'status' },
        { label: this.$t('Actions'), field: 'actions', sortable: false }
      ]
    };
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      this.isLoading = true;
      const params = {
        page: this.serverParams.page,
        limit: this.serverParams.perPage,
        SortField: this.serverParams.sort.field,
        SortType: this.serverParams.sort.type,
        search: this.serverParams.searchTerm
      };
      try {
        const { data } = await axios.get('service_jobs', { params });
        this.jobs = data.jobs;
        this.totalRows = data.totalRows;
      } finally {
        this.isLoading = false;
      }
    },
    onPageChange({ currentPage }) {
      this.serverParams.page = currentPage;
      this.fetchJobs();
    },
    onPerPageChange({ currentPerPage }) {
      this.serverParams.perPage = currentPerPage;
      this.fetchJobs();
    },
    onSortChange(params) {
      this.serverParams.sort.field = params[0].field;
      this.serverParams.sort.type = params[0].type;
      this.fetchJobs();
    },
    onSearch(params) {
      this.serverParams.searchTerm = params.searchTerm;
      this.fetchJobs();
    },
    async deleteJob(row) {
      const ok = await this.$bvModal.msgBoxConfirm(this.$t('AreYouSure'), {
        size: 'sm'
      });
      if (!ok) return;
      
      try {
        await axios.delete(`service_jobs/${row.id}`);
        this.makeToast('success', this.$t('Deleted_in_successfully'), this.$t('Success'));
        await this.fetchJobs();
      } catch (error) {
        console.error('Error deleting job:', error);
        const errorMsg = error.response?.data?.message || error.message || this.$t('InvalidData');
        this.makeToast('danger', errorMsg, this.$t('Failed'));
      }
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

















