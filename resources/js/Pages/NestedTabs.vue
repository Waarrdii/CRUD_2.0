<!-- resources/js/Pages/NestedTabs.vue -->
<template>
    <div>
      <h2>Internal Tabs</h2>
      <nav class="flex space-x-2">
        <router-link to="/nested-tabs/TabsOne">Tab 1</router-link>
        <router-link to="/nested-tabs/TabsTwo">Tab 2</router-link>
      </nav>
      <RouterView />
    </div>
  </template>
  
  <script setup>
  // Tidak ada logic tambahan yang diperlukan saat ini
  </script>
  