<script setup>
import { ref, watch, onMounted } from 'vue'
defineProps({
    cards: {
        type: Array,
    },
    addedToDrawer: {
        type: Array,
    },
})

const favorites = ref([])

const emit = defineEmits(['on-click-add'])

const onClickAdd = (card) => {
    emit('on-click-add', card)
}
const onClickAddToFav = (card) => {
    if (card.isFavorite){
        card.isFavorite = ''
        favorites.value = favorites.value.filter(favorite => favorite.id !== card.id)
        console.log(favorites.value)
    } else {
        card.isFavorite = 'true'
        favorites.value.push(card)
        console.log(favorites.value)
    }
}

watch(favorites, (newVal) => {
  localStorage.setItem('favorites', JSON.stringify(newVal))
}, { deep:true })

onMounted(()=> {
  favorites.value = JSON.parse(localStorage.getItem('favorites')) || []
})
</script>

<template>
    <div class="grid grid-cols-4 gap-5" v-auto-animate>
        <div
            class="relative bg-white border-slate-200 rounded-3xl p-8 cursor-grab transition hover:-translate-y-2 hover:shadow-xl"
            v-for="card in cards"
            :key="card.id"
        >
            <img @click="onClickAddToFav(card)" :src="card.isFavorite ? '/public/like-2.svg' : '/public/like-1.svg'" alt="like" class="absolute top-8 left-8 cursor-pointer">
            <img :src="`/public${card.imageUrl}`" alt="sneaker">
            <p>{{ card.title }}</p>

            <div class="flex justify-between mt-5">
                <div class="flex flex-col">
                    <span class="text-slate-400">Цена:</span>
                    <b>{{ card.price }} руб.</b>
                </div>

                <img @click="onClickAdd(card)" :src="card.isAdded ? '/public/checked.svg' : '/public/plus.svg'" alt="plus" class="cursor-pointer">
            </div>
        </div>
    </div>
    <div class="grid grid-cols-4 gap-5">
        <div
            class="relative bg-white border-slate-200 rounded-3xl p-8 cursor-grab transition hover:-translate-y-2 hover:shadow-xl"
            v-for="favorite in favorites"
            :key="favorite.id"
        >
            <img @click="onClickAddToFav(favorite)" :src="favorite.isFavorite ? '/public/like-2.svg' : '/public/like-1.svg'" alt="like" class="absolute top-8 left-8 cursor-pointer">
            <img :src="`/public${favorite.imageUrl}`" alt="sneaker">
            <p>{{ favorite.title }}</p>

            <div class="flex justify-between mt-5">
                <div class="flex flex-col">
                    <span class="text-slate-400">Цена:</span>
                    <b>{{ favorite.price }} руб.</b>
                </div>

                <img :src="favorite.isAdded ? '/public/checked.svg' : '/public/plus.svg'" alt="plus" class="cursor-pointer">
            </div>
        </div>
    </div>
</template>