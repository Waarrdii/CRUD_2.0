<template>
    <div class="">
        <div class="m-5 w-auto flex flex-start">
            <div 
            :class="activeTabId === tabId ? 'bg-gray-200' : 'bg-gray-100'"
            class="first:rounded-tl-md last:rounded-tr-md border-r bg-gray-100 p-2 hover:bg-gray-200 cursor-pointer "
                v-for="[tabId, tab] in Object.entries(mainTabs)" :key="tabId">
                {{ tabId }}
            </div>
        </div>
        <div v-if="activeTabId"
        class="m-5 w-auto flex flex-start">
            <div
            
            class="first:rounded-tl-md last:rounded-tr-md border-r bg-gray-100 p-2 hover:bg-gray-200 cursor-pointer "
                v-for="[tabId, tab] in Object.entries(mainTabs[activeTabId])" :key="tabId">
                {{ tabId }}
            </div>
        </div>
 </div>
    <div>
        <slot name="content" />
    </div>
    <div>
        <DangerButton class="m-5" @click="addNewTab('home')">Add home</DangerButton>
        <DangerButton class="m-5" @click="addNewTab('products')">Add products</DangerButton>
        <DangerButton class="m-5" @click="addNewTab('brands')">Add brands</DangerButton>
    </div>


</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import DangerButton from '@/Components/DangerButton.vue';
import { router } from '@inertiajs/vue3';

const store = useStore();

const mainTabs = computed(() => store.state.mainTabs);
const activeTabId = computed(() => store.state.activeTabId);

const addNewTab = (tab) => {
    const existingTab = Object.keys(mainTabs.value).find(key => mainTabs.value[key].content === tab);
    if (existingTab) {
        return;
    } else {
        store.dispatch('addNewTab', { tabName: tab, data: { content: 'data adalah ' + tab } });
    }
    
    store.dispatch('setActiveTabId', tab);
    router.visit(tab);
    console.log(activeTabId.value);
}

const handleUpdateTabDataTest = () => {
    const tabId = 'home';
    const secondTabId = 'Tab2';
    const data = {
        content: 'Updated Info 2'
    };
    if (mainTabs.value[tabId]) {
        store.dispatch('setUpdateTabData', { tabId, secondTabId, data });
    }
}

const handleUpdateTabData = () => {
    const tabId = 'home';
    const secondTabId = 'Tab1';
    const data = {
        content: 'Updated Info 1'
    };
    if (mainTabs.value[tabId]) {
        store.dispatch('setUpdateTabData', { tabId, secondTabId, data });
    }
}
</script>
