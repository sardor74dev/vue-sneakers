<script setup>
import { ref, computed, provide } from 'vue';

import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

const drawerOpen = ref(false)
const addedToDrawer = ref([])

const openDrawer = () => {
  drawerOpen.value = true
}
const closeDrawer = () => {
  drawerOpen.value = false
}

const sumPrice = computed(() => {
  if (addedToDrawer.value.length === 0){
    return 0
  }
  return addedToDrawer.value.reduce((accumulator, added) => {
    return accumulator + added.price }, 0
  )
})

const tax = computed(() => {
  if (addedToDrawer.value.length === 0){
    return 0
  }
  return Math.round(sumPrice.value * 5 / 100)
})

provide('addedToDrawer', addedToDrawer)
// provide('cards', cards)
</script>

<template>
  <Drawer v-if="drawerOpen" @closeDrawer="closeDrawer" :sumPrice="sumPrice" :tax="tax" />
  <div class="bg-white w-4/5 m-auto mt-14 rounded-xl shadow-xl">
    <Header @openDrawer="openDrawer" :sumPrice="sumPrice" />
    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>