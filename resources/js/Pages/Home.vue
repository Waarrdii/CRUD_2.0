<template>
   <button @click="incrementCount">Klik saya!</button>
   <p>Kliks: {{ count }}</p>
 </template>
 
 <script setup>
 import { computed } from 'vue'
 import { useStore } from 'vuex'
 
 const store = useStore()
 const count = computed(() => store.state.count)
 
 function incrementCount() {
   store.commit('increment')
 }
 </script>
 