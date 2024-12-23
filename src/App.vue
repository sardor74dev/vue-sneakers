<script setup>
import { useMainStore } from './stores/MainStore';

import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

const mainStore = useMainStore()

</script>

<template>
  <Drawer v-if="mainStore.drawerOpen" />
  <div class="bg-white w-full min-[425px]:w-4/5 m-auto min-[425px]:mt-14 rounded-xl shadow-xl">
    <Header />
    <div class="p-5 min-[425px]:p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>