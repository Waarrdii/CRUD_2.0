import { createStore } from 'vuex';

export default createStore({
  state: {
    tabsData: {},
    count: 0
  },
  mutations: {
    increment(state) {
       state.count++ 
      },
    setTabData(state, { tabId, data }) {
      state.tabsData = { ...state.tabsData, [tabId]: data };
    },
  },
  actions: {},
  modules: {}
});
