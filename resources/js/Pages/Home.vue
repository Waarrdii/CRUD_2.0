<template>
  <Welcome>
    <template #content>
      <h1>Home</h1>
      <button @click="incrementCount">Klik saya!</button>
      <p>Kliks: {{ count }}</p>
      <button @click="$emit('opne-second-tab', 'tab1','create')">add second tab</button>
    </template>

    
  </Welcome>

</template>

<script setup>
import { computed, inject, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import Welcome from './Welcome.vue';

const store = useStore()
const count = computed(() => store.state.count)

function incrementCount() {
  store.commit('increment')
}

</script>