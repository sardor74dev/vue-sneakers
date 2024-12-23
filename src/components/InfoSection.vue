<script setup>
import { useMainStore } from '@/stores/MainStore';
defineProps(['title', 'description', 'imageUrl'])

const mainStore = useMainStore()

</script>
<template>
    <div class="flex flex-col items-center text-center gap-5">
        <img class="w-28 h-28" :src="`/public/${imageUrl}.png`" alt="image">
        <div class="flex flex-col gap-2.5">
            <b class="text-2xl font-sans">
                {{ title }}
            </b>
            <p class="text-base text-gray-400 font-sans max-w-72">
                {{ description }}
            </p>
        </div>
        <router-link to="/">
            <button @click="mainStore.closeDrawer" class="bg-lime-500 rounded-small w-full px-14 pt-5 pb-5 text-white font-sans font-normal hover:bg-lime-600 active:bg-lime-700 cursor-pointer">
                Вернуться назад
            </button>
        </router-link>
    </div>
</template>