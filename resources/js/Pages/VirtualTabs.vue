<template>
    <div class="">
        <div class="m-5 w-auto flex flex-start">
            <div @click="openTab(tabId)" :class="activeTabId === tabId ? 'bg-gray-200' : 'bg-gray-100'"
                class="first:rounded-tl-md last:rounded-tr-md border-r bg-gray-100 p-2 hover:bg-gray-200 cursor-pointer "
                v-for="[tabId, tab] in Object.entries(mainTabs)" :key="tabId">
                {{ tabId }}
            </div>
        </div>
        <div v-if="activeTabId" class="m-5 w-auto flex flex-start">
            <div 
                :class="activeSecondTabId === secondTabId ? 'bg-gray-200' : 'bg-gray-100'"
            class="first:rounded-tl-md last:rounded-tr-md border-r bg-gray-100 p-2 hover:bg-gray-200 cursor-pointer "
                v-for="[secondTabId, secondTab] in Object.entries(mainTabs[activeTabId])" :key="secondTabId"
                @click="openSecondTab(secondTabId)">
                {{ secondTabId }}
            </div>
        </div>
    </div>
    <div>
        <slot name="content" />
    </div>

    <div>
        <DangerButton class="m-5" @click="addNewTab('users')">Users</DangerButton>
        <DangerButton class="m-5" @click="addNewTab('products')">products</DangerButton>
        <DangerButton class="m-5" @click="addNewTab('brands')">brands</DangerButton>
    </div>


</template>

<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import DangerButton from '@/Components/DangerButton.vue';
import { router } from '@inertiajs/vue3';

const store = useStore();

const mainTabs = computed(() => store.state.mainTabs);
const activeTabId = computed(() => store.state.activeTabId);
const activeSubTab = computed(() => store.state.activeSubTab);

const setActiveSubTab = ({ tabId, route }) => {
    store.dispatch('setActiveSubTab', { tabId, route })
}


const addNewTab = (tab) => {
    const existingTab = Object.keys(mainTabs.value).includes(tab);
    const routeData = '/' + tab;
    if (existingTab) {
        return;
    } else {
        store.dispatch('addNewTab', {
            tabName: tab,
            data: {
                index: {
                    route: routeData
                }
            }
        });
        setActiveSubTab({ tabId: tab, route: routeData });
    }

    store.dispatch('setActiveTabId', tab);
    router.visit('/' + tab);
}

const openTab = (tab) => {
    store.dispatch('setActiveTabId', tab);
    router.visit(store.state.activeSubTab[tab]);
    console.log(activeSubTab.value);
    
}

const openSecondTab = (tab) => {
    router.visit('/' + activeTabId.value + '/' + tab);
}

onMounted(() => {
    console.log("Main tabs :", mainTabs.value);
    console.log("Second Active tabs :", store.state.activeSubTab);
    console.log("Active tabs :", activeTabId.value);
})

</script>
