import { createStore } from 'vuex';

export default createStore({
  state: {
    mainTabs: {},
    secondaryTabs: {},
    activeTabId: null
  },
  mutations: {
    addNewTab(state, {tabName, data}) {
      state.mainTabs = {
        ... state.mainTabs,
        [tabName]: {
          ...data
        }
      };
    },
    updateTabData(state, { tabId, secondTabId, data }) {
      if (state.mainTabs[tabId]) {
        state.mainTabs[tabId] = {
          ...state.mainTabs[tabId],
          [secondTabId]: {
            ...data
          }
        }
      }
    },
    setActiveTabId(state, tabId) {
      state.activeTabId = tabId;
    }
  },
  actions: {
    addNewTab({ commit }, tabName) {
      commit('addNewTab', tabName);
    },
    setUpdateTabData({ commit }, { tabId, secondTabId, data }) {
      commit('updateTabData', { tabId, secondTabId, data });
    },
    setActiveTabId({ commit }, tabId) {
      commit('setActiveTabId', tabId);
    }
  },
  modules: {}
});
