import { createStore } from 'vuex';

export default createStore({
  state: {
    tabsData: {},
    activeTabId: null,
    count: 0
  },
  mutations: {
    setActiveTabId(state, tabId) {
      state.activeTabId = tabId;
      Object.keys(state.tabsData).forEach((id) => {
        state.tabsData[id].active = (id === tabId);
      });
    },
    
    increment(state) {
       state.count++ 
      },
    setTabData(state, { tabId, data }) {
      state.tabsData = {
        ...state.tabsData,
        [tabId]: {
          ...data,
          active: (state.activeTabId === tabId),
        },
      };
    },
    setChildTabData(state, { parentTabId, childTabData }) {
      if(!state.tabsData[parentTabId].childTab) {
        state.tabsData[parentTabId].childTab = {};
      }
      const childTabId = `childTab${Object.keys(state.tabsData[parentTabId].childTabData).length + 1}`;
      state.tabsData[parentTabId].childTab[childTabId] = {
        ...childTabData,
        active: true,
      };
    },
    updateFormData(state, formData) {
      if (state.activeTabId) {
        state.tabsData[state.activeTabId] = {
          ...state.tabsData[state.activeTabId],
          formData,
        };
      }
    },
    
    removeTabData(state, tabId) {
      const {[tabId]: _, ...rest} = state.tabsData;
      state.tabsData = rest;
      if (state.activeTabId === tabId) {
        state.activeTabId = null;
      }
    }
  },
  actions: {
    setActiveTabId({ commit }, tabId) {
      commit('setActiveTabId', tabId);
    },
    addChildTabData ({ commit }, { parentTabId, childTabData }) {
      commit('setChildTabData', { parentTabId, childTabData });
    },
    updateTabData({ commit }, { tabId, data }) { 
      commit('setTabData', { tabId, data }); 
    }, 

    updateFormData({ commit }, formData) {
      commit('updateFormData', formData);
    },
    deleteTabData({ commit }, tabId) {
       commit('removeTabData', tabId); 
      }
  },
  modules: {}
});