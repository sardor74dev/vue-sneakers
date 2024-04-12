<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const emit = defineEmits(['openDrawer'])

const openDrawer = () => {
    emit('openDrawer')
}

defineProps(['sumPrice'])

</script>
<template>
    <header class="flex justify-between border-b border-slate-200 px-10 py-8">
        <router-link to="/">
            <div class="flex items-center gap-4">
                <img src="/public/logo.png" alt="logo">
                <div>
                    <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
                    <p class="text-slate-500">Магазин лучших кроссовок</p>
                </div>
            </div>
        </router-link>
        <ul class="flex items-center gap-10">
            <li @click="openDrawer" class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                <img src="/public/cart.svg" alt="cart">
                <b>{{ sumPrice }} руб.</b>
            </li>
            <router-link to="/favorites">
                <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                <img src="/public/heart.svg" alt="heart">
                <span>Закладки</span>
            </li>
            </router-link>
            <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black">
                <img src="/public/profile.svg" alt="profile">
                <span>Профиль</span>
            </li>
        </ul>
    </header>
</template>