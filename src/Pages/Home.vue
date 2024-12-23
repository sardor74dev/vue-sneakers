<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useMainStore } from '@/stores/MainStore';
import CardList from '../components/CardList.vue'

const mainStore = useMainStore()

</script>
<template>
  <div class="bg-beige flex flex-row flex-wrap justify-between rounded-2xl">
    <div>
      <div class="pt-[16px] pl-[20px]">
        <img src="/public/image 7.svg">
      </div>
      <div class="pt-[32px] pl-[61px]">
        <h1 class="text-green text-3xl font-sans font-bold">Stan Smith,</h1>
        <p class="text-black text-3xl font-sans font-bold">Forever!</p>
      </div>
      <button class="bg-buttonGreen text-white text-base font-sans pt-[14px] pb-[14px] pl-[42px] pr-[42px] ml-[61px] mt-[20px] text-base font-bold rounded-large">
        Купить
      </button>
    </div>
    <img src="/public/image-6.png" alt="main image">
  </div>
  <div class="flex flex-wrap justify-between">
    <h2 class="text-3xl font-bold mt-[42px] mb-8">Все кроссовки</h2>
    <div class="flex flex-wrap gap-4">
      <select class="py-0 outline-none" @change="mainStore.onChange">
        <option value="name">По названию</option>
        <option value="price">По цене (дешевые)</option>
        <option value="-price">По цене (дорогие)</option>
      </select>
      <div class="relative flex items-center">
        <img class="absolute left-4 top-12" src="/public/search.svg"/>
        <input 
          @input="mainStore.onChangeInput"
          class="border rounded-md py-2 pl-12 outline-none"
          type="text"
          placeholder="Поиск"
        >
      </div>
    </div>
  </div>
  <CardList />
</template>