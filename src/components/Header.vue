<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useMainStore } from '@/stores/MainStore';

const mainStore = useMainStore()

</script>
<template>
    <header class="flex justify-between border-b border-slate-200 px-5 min-[425px]:px-10 py-8">
        <router-link to="/">
            <div class="flex items-center gap-4">
                <img src="/public/logo.png" alt="logo">
                <div class="hidden md:flex flex-col gap-1">
                    <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
                    <p class="text-slate-500">Магазин лучших кроссовок</p>
                </div>
            </div>
        </router-link>
        <ul class="flex items-center gap-4 lg:gap-10">
            <li @click="mainStore.openDrawer" class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                <img src="/public/cart.svg" alt="cart">
                <b>{{ mainStore.sumPrice }} руб.</b>
            </li>
            <router-link to="/favorites">
                <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                <img src="/public/heart.svg" alt="heart">
                <span class="hidden lg:inline-flex">Закладки</span>
            </li>
            </router-link>
            <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                <img src="/public/profile.svg" alt="profile">
                <span class="hidden lg:inline-flex">Профиль</span>
            </li>
        </ul>
    </header>
</template>