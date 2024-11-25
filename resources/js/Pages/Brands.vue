<template>
  <VirtualTabs>
    <template #content>
      <div class="m-5">
        <h1>Brands</h1>

        <PrimaryButton @click="addSecondTab('create')">create</PrimaryButton>
      </div>

    </template>
  </VirtualTabs>

</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PrimaryButton from '@/Components/PrimaryButton.vue';

import VirtualTabs from './VirtualTabs.vue';

const store = useStore()
const count = computed(() => store.state.count)
const activeTabId = computed(() => store.state.activeTabId)


const addSecondTab = (tabName) => {
  const secondTabName = tabName;
  const secondTabData = {
    content: "create page"
  };
  store.dispatch('setUpdateTabData', { tabId: activeTabId.value , secondTabId : secondTabName, data  : secondTabData });
  console.log(store.state.mainTabs);
}

function incrementCount() {
  store.commit('increment')
}

</script>
