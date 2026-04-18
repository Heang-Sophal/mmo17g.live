<template>
  <div>
    <!-- Initial app loader: shown immediately after refresh until core data is ready -->
    <div v-if="!Loading" class="initial-loader-overlay">
      <div class="global-sync-card">
        <div class="global-sync-spinner"></div>
        <h3 class="global-sync-title">
          {{ $t ? ($t('pos.Loading_Application') || 'Loading application') : 'Loading application' }}
        </h3>
        <p class="global-sync-subtitle">
          {{ $t ? ($t('pos.Loading_Application_help') || 'Please wait while the POS interface is being prepared.') : 'Please wait while the POS interface is being prepared.' }}
        </p>
      </div>
    </div>

    <router-view></router-view>

    <!-- Global offline sync fullscreen loader -->
    <div v-if="globalSyncActive" class="global-sync-overlay">
      <div class="global-sync-card">
        <div class="global-sync-spinner"></div>
        <h3 class="global-sync-title">
          {{ $t ? ($t('pos.Syncing_offline_sales') || 'Syncing offline sales') : 'Syncing offline sales' }}
        </h3>
        <p class="global-sync-subtitle">
          {{ $t ? ($t('pos.Syncing_offline_sales_help') || 'Please wait while your offline sales are being synchronized.') : 'Please wait while your offline sales are being synchronized.' }}
        </p>
      </div>
    </div>

    <customizer v-if="show_language && !isPosPage"></customizer>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      Loading:false,
      globalSyncActive: false,
    };
  },
  computed: {
    
    ...mapGetters("config", ["getThemeMode"]),
    ...mapGetters(["isAuthenticated","show_language","currentUser"]),
    themeName() {
      return this.getThemeMode.dark ? "dark-theme" : " ";
    },
    rtl() {
      return this.getThemeMode.rtl ? "rtl" : " ";
    },

    isPosPage() {
      return this.$route.path === '/app/pos';
    },
    titleTemplate() {
      return `%s | ${this.currentUser?.page_title_suffix || "Ultimate Inventory With POS"}`;
    }
  },

  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: "Stocky",
      titleTemplate: this.titleTemplate,

      bodyAttrs: {
        class: [this.themeName, "text-left"]
      },
      htmlAttrs: {
        dir: this.rtl
      },
      
    };
  },

  beforeDestroy() {
    // Clean up listeners
    try {
      if (typeof window !== 'undefined' && window.Fire && window.Fire.$off) {
        window.Fire.$off('offline-sync:start', this.onGlobalSyncStart);
        window.Fire.$off('offline-sync:end', this.onGlobalSyncEnd);
        window.Fire.$off('offline-sync:auto-result', this.onGlobalSyncResult);
      }
    } catch (e) {}
  },
  methods:{
    ...mapActions([
      "refreshUserPermissions",
    ]),
    async initializeApp() {
      try {
        // Ensure initial permissions and user info are fetched
        await this.refreshUserPermissions(this.$i18n);
      } catch (e) {
        // ignore; guards/interceptors will handle routing on auth errors
      } finally {
        this.Loading = true;
        // Signal that the app rendered initial route and is allowed to hide loader when no pending requests
        if (window) {
          window.__appReadyToHideLoader = true;
          if (typeof window.__hideInitialLoaderIfDone === 'function') {
            window.__hideInitialLoaderIfDone();
          }
        }
      }
    },
    onGlobalSyncStart() {
      this.globalSyncActive = true;
    },
    onGlobalSyncEnd() {
      this.globalSyncActive = false;
    },
    onGlobalSyncResult(payload) {
      try {
        const syncedCount = Number(payload && payload.syncedCount || 0);
        const lastError = payload && payload.lastError;
        // If at least one offline sale was synced successfully and there is no error,
        // reload the current page to reflect updated data everywhere – except when
        // the user is on the POS screen with a potentially active cart. In that
        // case, POS itself will decide if/when to reload via its own confirmation
        // flow to avoid disrupting an in‑progress checkout.
        if (syncedCount > 0 && !lastError) {
          const isPosRoute = this.$route &&
            (this.$route.name === 'pos' ||
             String(this.$route.path || '').includes('/app/pos'));
          if (!isPosRoute) {
            if (typeof window !== 'undefined' && window.location && typeof window.location.reload === 'function') {
              window.location.reload();
            }
          }
        }
      } catch (e) {}
    },
  },

  beforeMount() {
    // Replace timeout with awaited initialization
    this.initializeApp();
  },
  
  mounted() {
    // Listen for global offline sync start/end/result events
    try {
      if (typeof window !== 'undefined' && window.Fire && window.Fire.$on) {
        window.Fire.$on('offline-sync:start', this.onGlobalSyncStart);
        window.Fire.$on('offline-sync:end', this.onGlobalSyncEnd);
        window.Fire.$on('offline-sync:auto-result', this.onGlobalSyncResult);
      }
    } catch (e) {}
  },
};
</script>
<style scoped>
.initial-loader-overlay,
.global-sync-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.global-sync-card {
  background: linear-gradient(135deg, #111827, #1f2933);
  border-radius: 18px;
  padding: 24px 32px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(148, 163, 184, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 340px;
  width: 90%;
  text-align: center;
  color: #e5e7eb;
}

.global-sync-spinner {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 3px solid rgba(148, 163, 184, 0.35);
  border-top-color: #38bdf8;
  animation: global-sync-spin 0.9s linear infinite;
  margin-bottom: 16px;
}

.global-sync-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 6px;
}

.global-sync-subtitle {
  font-size: 0.85rem;
  opacity: 0.85;
  margin: 0;
}

@keyframes global-sync-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
