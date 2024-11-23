<template>
    <div class="w-1/2 m-5 flex flex-start">
        <div :class="[tab.content === activeTabId ? 'bg-gray-200' : 'bg-gray-100']"
            class="first:rounded-tl-md last:rounded-tr-md border-r bg-gray-100 p-2 hover:bg-gray-200 cursor-pointer "
            v-for="[tabId, tab] in Object.entries(mainTabs)" :key="tabId">
            {{ tabId }}
        </div>

    </div>

    <DangerButton class="m-5" @click="addNewTab('home')">Add home</DangerButton>
    <DangerButton class="m-5" @click="addNewTab('products')">Add products</DangerButton>
    <DangerButton class="m-5" @click="addNewTab('brands')">Add brands</DangerButton>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

const store = useStore();

const mainTabs = computed(() => store.state.mainTabs);

const addNewTab = (tab) => {
    const existingTab = Object.keys(mainTabs.value).find(key => mainTabs.value[key].content === tab);
    if (existingTab) {
        return;
    } else {
        store.dispatch('addNewTab', { tabName: tab, data: { content: 'data : ' + tab } });
    }
    console.log(store.state.mainTabs);
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
