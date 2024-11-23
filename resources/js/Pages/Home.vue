<script setup>
import { computed, inject, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import Welcome from './Welcome.vue';

const store = useStore()
const count = computed(() => store.state.count)

const openSecondTab = () => {
  console.log(store.state.tabsData);
  const childTabData = {
    id: store.state.tabsData.length + 1,
    content: 'tab1',
    active: false
  }
  store.dispatch('addTabData', childTabData)
}

function incrementCount() {
  store.commit('increment')
}

</script>

<template>
  <Welcome>
    <template #content>
      <h1>Home</h1>
      <button @click="incrementCount">Klik saya!</button>
      <p>Kliks: {{ count }}</p>
      <button @click="openSecondTab('tab1','create')">add second tab</button>
    </template>

    
  </Welcome>

</template>

