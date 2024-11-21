<template>
  <div class="flex space-x-2 mb-4">

    <router-link @click="openTab('Home')" to="/">Home</router-link>
    <router-link @click="openTab('Products')" to="/products">Products</router-link>
    <router-link @click="openTab('Brands')" to="/brands">Brands</router-link>

  </div>
  <div class="m-5 w-auto flex flex-start" v-if="activeTab.length > 0">
    <div v-for="(tab, index) in activeTab" :key="tab.id"
      :class="[tab.active ? 'bg-gray-200' : 'bg-gray-100']"
      class="first:rounded-tl-md last:rounded-tr-md border-r bg-gray-100 p-2 hover:bg-gray-200 cursor-pointer ">
      <RouterLink :to="`/${tab.id}`">{{ tab.id }}</RouterLink>
    </div>
  </div>
  <router-view />
</template>
<script setup>
import { ref } from 'vue'

const activeTab = ref([]);
const activateTab = (index) => {
  activeTab.value.forEach((tab, i) => {
    tab.active = (i === index);
  })
}

const openTab = (tabName) => {
  const existTab = activeTab.value.findIndex(tab => tab.id === tabName);
  if (existTab === -1) {
    activeTab.value.push({
      id: tabName,
      active: true
    })
  } else {
    activeTab.value[existTab].active = true;
  }
}
</script>
