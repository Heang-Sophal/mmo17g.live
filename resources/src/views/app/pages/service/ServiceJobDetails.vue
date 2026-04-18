<template>
  <div class="main-content">
    <breadcumb
      :page="$t('Service_Job_Details') || 'Service Job Details'"
      :folder="$t('Service_Maintenance')"
    />

    <div v-if="isLoading" class="loading_page spinner spinner-primary mr-3"></div>

    <div v-else-if="job" class="service-job-details-container">
      <!-- Header Section -->
      <div class="job-header">
        <div class="header-content">
          <div class="header-icon">
            <i class="i-Wrench"></i>
          </div>
          <div class="header-text">
            <h1 class="job-title">{{ $t('Service_Job_Details') || 'Service Job Details' }}</h1>
            <p class="job-ref">Reference: {{ job.Ref }}</p>
          </div>
        </div>
        <div class="header-actions">
          <button
            class="action-btn pdf-btn"
            @click="Service_Job_PDF(job.id)"
            :title="$t('Download_PDF') || 'Download PDF'"
            :disabled="isPdfLoading"
          >
            <i class="i-File-Download"></i>
          </button>
          <button
            class="action-btn print-btn"
            @click="printJob"
            :title="$t('Print') || 'Print'"
          >
            <i class="i-Printer"></i>
          </button>
          <router-link
            :to="`/app/service/jobs/edit/${job.id}`"
            class="action-btn edit-btn"
            :title="$t('Edit') || 'Edit'"
          >
            <i class="i-Edit"></i>
          </router-link>
          <button
            class="action-btn close-btn"
            @click="$router.back()"
            :title="$t('Close') || 'Close'"
          >
            <i class="i-Close"></i>
          </button>
        </div>
      </div>

      <!-- Content Section -->
      <div class="job-content">
        <div class="job-grid">
          <!-- Reference Card -->
          <div class="info-card">
            <div class="card-header">
              <div class="card-icon reference-icon">
                <i class="i-Tag"></i>
              </div>
              <h3 class="card-title">{{ $t('Reference') || 'Reference' }}</h3>
            </div>
            <div class="card-body">
              <div class="info-value">{{ job.Ref }}</div>
            </div>
          </div>

          <!-- Customer Card -->
          <div class="info-card">
            <div class="card-header">
              <div class="card-icon customer-icon">
                <i class="i-User"></i>
              </div>
              <h3 class="card-title">{{ $t('Customer') || 'Customer' }}</h3>
            </div>
            <div class="card-body">
              <div class="info-value">{{ job.client_name || '-' }}</div>
            </div>
          </div>

          <!-- Technician Card -->
          <div class="info-card">
            <div class="card-header">
              <div class="card-icon technician-icon">
                <i class="i-Engineering"></i>
              </div>
              <h3 class="card-title">{{ $t('Technician') || 'Technician' }}</h3>
            </div>
            <div class="card-body">
              <div class="info-value">{{ job.technician_name || '-' }}</div>
            </div>
          </div>

          <!-- Service Item Card -->
          <div class="info-card">
            <div class="card-header">
              <div class="card-icon service-icon">
                <i class="i-Box-Full"></i>
              </div>
              <h3 class="card-title">{{ $t('Service_Item') || 'Service Item' }}</h3>
            </div>
            <div class="card-body">
              <div class="info-value">{{ job.service_item || '-' }}</div>
            </div>
          </div>

          <!-- Job Type Card -->
          <div class="info-card" v-if="job.job_type">
            <div class="card-header">
              <div class="card-icon job-type-icon">
                <i class="i-File-Clipboard-File--Text"></i>
              </div>
              <h3 class="card-title">{{ $t('Job_Type') || 'Job Type' }}</h3>
            </div>
            <div class="card-body">
              <div class="info-value">{{ job.job_type }}</div>
            </div>
          </div>

          <!-- Status Card -->
          <div class="info-card">
            <div class="card-header">
              <div class="card-icon status-icon">
                <i class="i-Check-Circle"></i>
              </div>
              <h3 class="card-title">{{ $t('Status') || 'Status' }}</h3>
            </div>
            <div class="card-body">
              <span :class="['status-badge-modern', statusClass(job.status)]">
                <span class="status-dot"></span>
                {{ statusLabel(job.status) }}
              </span>
            </div>
          </div>

          <!-- Scheduled Date Card -->
          <div class="info-card" v-if="job.scheduled_date">
            <div class="card-header">
              <div class="card-icon datetime-icon">
                <i class="i-Calendar-4"></i>
              </div>
              <h3 class="card-title">{{ $t('Scheduled_Date') || 'Scheduled Date' }}</h3>
            </div>
            <div class="card-body">
              <div class="info-value">{{ formatDate(job.scheduled_date) }}</div>
            </div>
          </div>

          <!-- Started At Card -->
          <div class="info-card" v-if="job.started_at">
            <div class="card-header">
              <div class="card-icon datetime-icon">
                <i class="i-Clock"></i>
              </div>
              <h3 class="card-title">{{ $t('Started_At') || 'Started At' }}</h3>
            </div>
            <div class="card-body">
              <div class="info-value">{{ formatDateTime(job.started_at) }}</div>
            </div>
          </div>

          <!-- Completed At Card -->
          <div class="info-card" v-if="job.completed_at">
            <div class="card-header">
              <div class="card-icon datetime-icon">
                <i class="i-Check"></i>
              </div>
              <h3 class="card-title">{{ $t('Completed_At') || 'Completed At' }}</h3>
            </div>
            <div class="card-body">
              <div class="info-value">{{ formatDateTime(job.completed_at) }}</div>
            </div>
          </div>
        </div>

        <!-- Notes Section -->
        <div v-if="job.notes" class="notes-section">
          <h3 class="notes-title">
            <i class="i-File-Text"></i>
            {{ $t('Notes') || 'Notes' }}
          </h3>
          <div class="notes-content">
            <p>{{ job.notes }}</p>
          </div>
        </div>

        <!-- Checklist Section -->
        <div v-if="checklist && checklist.length > 0" class="checklist-section">
          <h3 class="checklist-title">
            <i class="i-Check"></i>
            {{ $t('Checklist') || 'Checklist' }}
          </h3>
          <div class="checklist-grid">
            <div
              v-for="item in checklist"
              :key="item.id"
              :class="['checklist-item', { 'completed': item.is_completed }]"
            >
              <div class="checklist-item-header">
                <div class="checklist-checkbox">
                  <i
                    :class="item.is_completed ? 'i-Check-Circle text-success' : 'i-Circle text-muted'"
                  ></i>
                </div>
                <div class="checklist-item-name">{{ item.item_name }}</div>
              </div>
              <div v-if="item.category_name" class="checklist-category">
                <i class="i-Folder"></i>
                {{ item.category_name }}
              </div>
            </div>
          </div>
        </div>

        <!-- Empty Checklist Message -->
        <div v-else class="empty-checklist">
          <i class="i-Info"></i>
          <p>{{ $t('No_checklist_items_defined') || 'No checklist items defined for this job.' }}</p>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else class="error-state">
      <i class="i-Close-Window"></i>
      <p>{{ $t('Job_not_found') || 'Service job not found.' }}</p>
      <router-link to="/app/service/jobs" class="btn btn-primary">
        {{ $t('Back_to_Jobs') || 'Back to Jobs' }}
      </router-link>
    </div>

    <!-- PDF Loading Overlay -->
    <div v-if="isPdfLoading" class="pdf-loading-overlay">
      <div class="loading-content">
        <div class="spinner spinner-primary"></div>
        <p>{{ $t('Generating_PDF') || 'Generating PDF...' }}</p>
      </div>
    </div>

    <!-- Print Template -->
    <div id="print_Service_Job" style="display: none;">
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #1a56db; padding-bottom: 15px;">
          <h1 style="color: #1a56db; margin: 0 0 10px 0;">SERVICE JOB</h1>
          <h2 style="color: #4b5563; margin: 0;">{{ job ? job.Ref : '' }}</h2>
        </div>

        <table style="width: 100%; margin-bottom: 20px;" cellpadding="5" cellspacing="0">
          <tr>
            <td style="width: 50%; vertical-align: top;">
              <h3 style="color: #1a56db; margin: 0 0 10px 0; font-size: 14px;">CUSTOMER</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> {{ job ? job.client_name : '-' }}</p>
              <p style="margin: 5px 0;" v-if="job && job.client_phone"><strong>Phone:</strong> {{ job.client_phone }}</p>
              <p style="margin: 5px 0;" v-if="job && job.client_email"><strong>Email:</strong> {{ job.client_email }}</p>
            </td>
            <td style="width: 50%; vertical-align: top;">
              <h3 style="color: #1a56db; margin: 0 0 10px 0; font-size: 14px;">JOB INFORMATION</h3>
              <p style="margin: 5px 0;"><strong>Service Item:</strong> {{ job ? job.service_item : '-' }}</p>
              <p style="margin: 5px 0;" v-if="job && job.job_type"><strong>Job Type:</strong> {{ job.job_type }}</p>
              <p style="margin: 5px 0;"><strong>Technician:</strong> {{ job ? job.technician_name : '-' }}</p>
              <p style="margin: 5px 0;" v-if="job && job.scheduled_date"><strong>Scheduled Date:</strong> {{ formatDate(job.scheduled_date) }}</p>
              <p style="margin: 5px 0;"><strong>Status:</strong> {{ job ? statusLabel(job.status) : '-' }}</p>
            </td>
          </tr>
        </table>

        <div v-if="job && job.notes" style="margin-bottom: 20px; padding: 10px; background: #f9fafb; border-left: 3px solid #1a56db;">
          <h3 style="color: #1a56db; margin: 0 0 10px 0; font-size: 14px;">NOTES</h3>
          <p style="margin: 0; white-space: pre-line;">{{ job.notes }}</p>
        </div>

        <div v-if="checklist && checklist.length > 0" style="margin-bottom: 20px;">
          <h3 style="color: #1a56db; margin: 0 0 10px 0; font-size: 14px;">CHECKLIST</h3>
          <table style="width: 100%; border-collapse: collapse;" cellpadding="5" cellspacing="0" border="1">
            <thead>
              <tr style="background: #1a56db; color: white;">
                <th style="padding: 8px; text-align: left;">Status</th>
                <th style="padding: 8px; text-align: left;">Category</th>
                <th style="padding: 8px; text-align: left;">Item</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in checklist" :key="item.id">
                <td style="padding: 8px;">{{ item.is_completed ? '✓ Completed' : '○ Pending' }}</td>
                <td style="padding: 8px;">{{ item.category_name || '-' }}</td>
                <td style="padding: 8px;">{{ item.item_name }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="margin-top: 30px; text-align: center; padding-top: 15px; border-top: 2px solid #e5e7eb;">
          <p style="color: #1a56db; font-weight: bold; margin: 0;">Thank you for your business!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NProgress from "nprogress";

export default {
  name: 'ServiceJobDetails',
  metaInfo: {
    title: 'Service Job Details'
  },
  data() {
    return {
      isLoading: true,
      isPdfLoading: false,
      job: null,
      checklist: []
    };
  },
  computed: {
    jobId() {
      return this.$route.params.id ? Number(this.$route.params.id) : null;
    }
  },
  async mounted() {
    if (this.jobId) {
      await this.loadJobDetails();
    } else {
      this.isLoading = false;
    }
  },
  methods: {
    async loadJobDetails() {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`service_jobs/${this.jobId}`);
        this.job = data.job || null;
        this.checklist = data.checklist || [];
      } catch (error) {
        console.error('Error loading job details:', error);
        this.makeToast('danger', this.$t('InvalidData') || 'Failed to load job details', this.$t('Failed') || 'Failed');
      } finally {
        this.isLoading = false;
      }
    },
    statusLabel(status) {
      const statusMap = {
        pending: this.$t('Pending') || 'Pending',
        in_progress: this.$t('In_Progress') || 'In Progress',
        completed: this.$t('complete') || 'Completed',
        cancelled: this.$t('Cancelled') || 'Cancelled'
      };
      return statusMap[status] || status;
    },
    statusClass(status) {
      if (status === 'pending') return 'pending';
      if (status === 'in_progress') return 'in-progress';
      if (status === 'completed') return 'completed';
      if (status === 'cancelled') return 'cancelled';
      return '';
    },
    formatDate(date) {
      if (!date) return '-';
      return new Date(date).toLocaleDateString();
    },
    formatDateTime(dateTime) {
      if (!dateTime) return '-';
      const date = new Date(dateTime);
      return date.toLocaleString();
    },
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //----------------------------------- Service Job PDF  -------------------------\\
    Service_Job_PDF(id) {
      // Show full page loading overlay
      this.isPdfLoading = true;
      NProgress.start();
      NProgress.set(0.1);
     
      axios
        .get(`service_job_pdf/${id}`, {
          responseType: "blob", // important
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Service_Job_" + id + ".pdf");
          document.body.appendChild(link);
          link.click();
          
          // Clean up
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          
          // Hide loading overlay after a short delay
          setTimeout(() => {
            this.isPdfLoading = false;
            NProgress.done();
            this.makeToast("success", this.$t("PDF_downloaded_successfully") || "PDF downloaded successfully", this.$t("Success") || "Success");
          }, 500);
        })
        .catch(() => {
          // Hide loading overlay on error
          this.isPdfLoading = false;
          NProgress.done();
          this.makeToast("danger", this.$t("InvalidData"), this.$t("Failed"));
        });
    },
    //------------------------------ Print -------------------------\\
    printJob() {
      this.$htmlToPaper('print_Service_Job');
    }
  }
};
</script>

<style scoped lang="scss">
/* ========================================
   SERVICE JOB DETAILS PAGE
   ======================================== */

.service-job-details-container {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 30px;
}

/* Header */
.job-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 1;
  }

  .header-icon {
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: white;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .header-text {
    .job-title {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      color: white;
      letter-spacing: -0.5px;
    }

    .job-ref {
      margin: 6px 0 0 0;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }
  }

  .header-actions {
    display: flex;
    gap: 8px;
    z-index: 1;
  }

  .action-btn {
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    &.pdf-btn:hover {
      background: rgba(239, 68, 68, 0.9);
      border-color: rgba(239, 68, 68, 0.9);
    }

    &.print-btn:hover {
      background: rgba(59, 130, 246, 0.9);
      border-color: rgba(59, 130, 246, 0.9);
    }

    &.edit-btn:hover {
      background: rgba(16, 185, 129, 0.9);
      border-color: rgba(16, 185, 129, 0.9);
    }

    &.close-btn:hover {
      background: rgba(239, 68, 68, 0.9);
      border-color: rgba(239, 68, 68, 0.9);
      transform: rotate(90deg);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

/* Content */
.job-content {
  padding: 32px;
  background: #f8f9fc;
}

.job-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

/* Info Cards */
.info-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);

    &::before {
      transform: scaleX(1);
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 2px solid #f1f5f9;
  }

  .card-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    flex-shrink: 0;
  }

  .customer-icon {
    color: #667eea;
  }

  .technician-icon {
    color: #10b981;
  }

  .service-icon {
    color: #f5576c;
  }

  .job-type-icon {
    color: #8b5cf6;
  }

  .status-icon {
    color: #43e97b;
  }

  .datetime-icon {
    color: #fa709a;
  }

  .reference-icon {
    color: #8b5cf6;
  }

  .card-title {
    margin: 0;
    font-size: 13px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .card-body {
    .info-value {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
      line-height: 1.5;
    }
  }
}

/* Status Badge */
.status-badge-modern {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulse 2s ease infinite;
  }

  &.pending {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    color: #92400e;
    
    .status-dot {
      background: #f59e0b;
    }
  }

  &.in-progress {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    color: #1e40af;
    
    .status-dot {
      background: #3b82f6;
    }
  }

  &.completed {
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    color: #065f46;
    
    .status-dot {
      background: #10b981;
    }
  }

  &.cancelled {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    color: #991b1b;
    
    .status-dot {
      background: #ef4444;
    }
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Notes Section */
.notes-section {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-left: 4px solid #667eea;

  .notes-title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: 700;
    color: #667eea;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    i {
      font-size: 20px;
    }
  }

  .notes-content {
    p {
      margin: 0;
      color: #475569;
      line-height: 1.8;
      white-space: pre-line;
    }
  }
}

/* Checklist Section */
.checklist-section {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

  .checklist-title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 20px 0;
    font-size: 16px;
    font-weight: 700;
    color: #1e293b;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    i {
      font-size: 20px;
      color: #667eea;
    }
  }

  .checklist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }

  .checklist-item {
    background: #f8f9fc;
    border-radius: 12px;
    padding: 16px;
    border: 2px solid #e2e8f0;
    transition: all 0.3s ease;

    &:hover {
      border-color: #cbd5e1;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    &.completed {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-color: #10b981;

      .checklist-item-name {
        color: #065f46;
      }
    }

    .checklist-item-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .checklist-checkbox {
      font-size: 20px;
      flex-shrink: 0;
    }

    .checklist-item-name {
      font-size: 15px;
      font-weight: 600;
      color: #1e293b;
      flex: 1;
    }

    .checklist-category {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: #64748b;
      margin-top: 8px;

      i {
        font-size: 14px;
      }
    }
  }
}

/* Empty Checklist */
.empty-checklist {
  background: white;
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

  i {
    font-size: 48px;
    color: #cbd5e1;
    margin-bottom: 16px;
  }

  p {
    margin: 0;
    color: #64748b;
    font-size: 14px;
  }
}

/* Error State */
.error-state {
  background: white;
  border-radius: 16px;
  padding: 60px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);

  i {
    font-size: 64px;
    color: #ef4444;
    margin-bottom: 20px;
  }

  p {
    margin: 0 0 24px 0;
    color: #64748b;
    font-size: 16px;
  }
}

/* PDF Loading Overlay */
.pdf-loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .loading-content {
    background: white;
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

    .spinner {
      margin: 0 auto 20px;
    }

    p {
      margin: 0;
      color: #1e293b;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>

