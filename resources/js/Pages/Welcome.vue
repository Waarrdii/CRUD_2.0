<template>
  <div class="flex space-x-2 mb-4">

    <button @click="addNewTab('home')">Home</button>
    <button @click="addNewTab('products')">Products</button>
    <button @click="addNewTab('brands')">Brands</button>

  </div>
  <div class="m-5 w-auto flex flex-start">
    <div v-for="(tab, index) in tabsData" :key="tab.id"
      :class="[tab.content === activeTabId ? 'bg-gray-200' : 'bg-gray-100']"
      class="first:rounded-tl-md last:rounded-tr-md border-r bg-gray-100 p-2 hover:bg-gray-200 cursor-pointer "
      @click="openTab(tab.content)">
      {{ tab.content }}
    </div>
  </div>
  <div class="m-5 w-auto flex flex-start">
    <div v-for="(sTab, index) in secondTabs" :key="sTab.id"
      class="first:rounded-tl-md last:rounded-tr-md border-r bg-gray-100 p-2 hover:bg-gray-200 cursor-pointer "
      >
      {{ sTab.content }}
    </div>
  </div>

  <slot name="content" />

</template>
<script setup>
import { computed, provide, ref } from 'vue'
import { router } from '@inertiajs/vue3';
import { useStore } from 'vuex';

const store = useStore();

const tabsData = computed(() => store.state.tabsData);
const secondTabs = computed(() => store.state.secondTabs);
const activeTabId = computed(() => store.state.activeTabId);


const openTab = (tabId) => {
  if (activeTabId.value === tabId) {
    return console.log(store.state.activeTabId); // Jika tab sudah aktif, tidak perlu melakukan apapun
  }
  store.dispatch('setActiveTabId', tabId);
  router.visit(tabId);
};


const addNewTab = (tabName) => {
  const existingTab = Object.keys(tabsData.value).find(key => tabsData.value[key].content === tabName);
  if (existingTab) {
    return openTab(tabName);
  } else {
    const newTabId = `tab${Object.keys(tabsData.value).length + 1}`;
    const newTabData = {
      content: tabName
    };
    store.dispatch('updateTabData', { tabId: newTabId, data: newTabData });
    openTab(tabName, newTabId);
  }

  console.log(store.state.tabsData);
}
const removeTab = (tabId) => {
  store.dispatch('deleteTabData', tabId);
}

</script>
