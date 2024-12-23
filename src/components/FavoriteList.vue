<script setup>
import { useMainStore } from '@/stores/MainStore';

const mainStore = useMainStore()
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-3 min-[1000px]:grid-cols-4 gap-5">
        <div
            class="relative bg-white border-slate-200 rounded-3xl p-2 xl:p-8 lg:p-4 cursor-grab transition hover:-translate-y-2 hover:shadow-xl"
            v-for="favorite in mainStore.favorites"
            :key="favorite.id"
        >
            <img 
                @click="mainStore.onClickAddToFav(favorite)" 
                :src="favorite.isFavorite ? '/public/like-2.svg' : '/public/like-1.svg'" 
                alt="like" 
                class="absolute top-2 left-2 xl:top-8 xl:left-8 lg:top-4 lg:left-4 cursor-pointer"
            >
            <img class="w-full min-w-28" :src="`/public${favorite.imageUrl}`" alt="sneaker">
            <p class="text-[14px] font-normal">{{ favorite.title }}</p>

            <div class="flex justify-between mt-5">
                <div class="flex flex-col">
                    <span class="text-slate-400 text-[11px] font-medium">Цена:</span>
                    <b class="text-[14px]">{{ favorite.price }} руб.</b>
                </div>

                <img :src="favorite.isAdded ? '/public/checked.svg' : '/public/plus.svg'" alt="plus" class="cursor-pointer">
            </div>
        </div>
    </div>
</template>