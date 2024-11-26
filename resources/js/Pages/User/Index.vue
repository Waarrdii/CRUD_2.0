<template>
  <VirtualTabs>
    <template #content>
      <div class="m-5">
        <h1 class="font-bold underline uppercase">User List :</h1>

        <ul v-for="user in users" :key="user.id"
        class="list-disc m-5">
          <li>{{ user.name }} | {{ user.email }}</li>
        </ul>
        <PrimaryButton @click="addSecondTab('create')">create</PrimaryButton>
      </div>

    </template>
  </VirtualTabs>

</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { router } from '@inertiajs/vue3';

import VirtualTabs from '../VirtualTabs.vue';

const props = defineProps({
  users : Array,
})

const store = useStore()


const setActiveSubTab = ({ tabId, route }) => {
    store.dispatch('setActiveSubTab', { tabId, route })
}
const addSecondTab = (tabName) => {
  const activeTabId = computed(() => store.state.activeTabId);
  const secondTabName = tabName;
  const secondTabData = {
    route: 'users/' + secondTabName,
  };
  store.dispatch('setUpdateTabData', { tabId: activeTabId.value , secondTabId : secondTabName, data  : secondTabData });
  router.visit('users/' + tabName);
  setActiveSubTab({ tabId: activeTabId.value, route: 'users/' + tabName });
}



</script>
