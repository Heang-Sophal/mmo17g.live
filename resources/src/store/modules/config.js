const state = {
  themeMode: {
    dark: false,
    light: true,
    semi_dark: false,
    theme_color: 'lite-purple',
    layout: 'large-sidebar',
    rtl: false,
  },
};

const getters = {
  getThemeMode: (state) => state.themeMode,
};

const actions = {
  changeThemeMode({ commit }) {
    commit('toggleThemeMode');
  },
  changeThemeLayout({ commit }, data) {
    commit('toggleThemeLayout', data);
  },
  changeThemeRtl({ commit }) {
    commit('toggleThemeRtl');
  },
};

const mutations = {
  toggleThemeMode: (state) => {
    state.themeMode.dark = !state.themeMode.dark;
  },
  setDarkMode: (state, darkMode) => {
    state.themeMode.dark = darkMode;
  },
  toggleThemeLayout(state, data) {
    state.themeMode.layout = data;
  },
  toggleThemeRtl(state) {
    state.themeMode.rtl = !state.themeMode.rtl;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
