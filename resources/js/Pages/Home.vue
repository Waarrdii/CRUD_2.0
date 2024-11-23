
<template>
  <Welcome>
    <template #content>
      <h1>Home</h1>
      <button @click="incrementCount">Klik saya!</button>
      <p>Kliks: {{ count }}</p>
      <button @click="addSecondTab('create')">add second tab</button>
    </template>

    
  </Welcome>

</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import Welcome from './Welcome.vue';

const store = useStore()
const count = computed(() => store.state.count)


const addSecondTab = (tabName) => {
    const secondTabName = tabName;
    const secondTabData = {
      content: secondTabName
    };
    store.dispatch('addSecondTabData', {tabName: secondTabName, secondTabData: secondTabData});
    console.log(store.state.secondTabs);
  
}

function incrementCount() {
  store.commit('increment')
}

</script>
