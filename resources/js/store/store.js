import { createStore } from 'vuex';

export default createStore({
  state: {
    mainTabs: {},
    activeTabId: null,
    activeSubTab: {}
  },
  mutations: {
    addNewTab(state, { tabName, data }) {
      state.mainTabs = {
        ...state.mainTabs,
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
      } else {
        console.error(`Tab ID ${tabId} tidak ditemukan di mainTabs`);
      }
    },
    setActiveTabId(state, tabId) {
      state.activeTabId = tabId;
    },

    //logika dibawah masih salah 
    setActiveSubTab(state, { tabId, route }) {
      if (state.activeSubTab[tabId]) {
        state.activeSubTab[tabId].route = route
      } else {
        state.activeSubTab = {
          ...state.activeSubTab,
          [tabId]: route

        }
      }
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
    },
    setActiveSubTab({ commit }, { tabId, route }) {
      commit ('setActiveSubTab', {tabId, route})
    }
  },
  modules: {}
});
