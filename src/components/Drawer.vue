<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import CartItemList from './CartItemList.vue'
import InfoSection from './InfoSection.vue'
import { useMainStore } from '@/stores/MainStore';

const mainStore = useMainStore()

const orderStatus = ref(false)

const orderStatusChange = () => {
    orderStatus.value = true
}
</script>

<template>
    <div class="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-60"></div>
    <div class="fixed top-0 right-0 z-20 h-full w-full min-[425px]:w-96 bg-white p-7 overflow-y-auto">
        <div class="flex flex-row gap-4">
            <button @click="mainStore.closeDrawer" class="bg-lime-500 hover:bg-lime-600 active:bg-lime-700 rounded-large p-2 rotate-180 mb-10">
                <img src="/public/arrow-next.svg">
            </button>
            <h2 class="text-2xl font-bold mb-8">Корзина</h2>
        </div>
        <CartItemList/>
        <InfoSection 
            v-if="!mainStore.sumPrice" 
            title="Корзина пустая" 
            description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            :imageUrl="`package-icon`"
        />
        <InfoSection 
            v-else-if="orderStatus" 
            title="Заказ оформлен" 
            :description="`Ваш заказ №1 скоро будет передан курьерской доставкой`"
            :imageUrl="`order-success-icon`"
        />
        <div v-else class="bg-white flex flex-col justify-end gap-5 my-7">
            <div class="flex">
                <p>Итого:</p>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ mainStore.sumPrice }} руб.</b>
            </div>
            <div class="flex">
                <p>Налог 5%:</p>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ mainStore.tax }} руб.</b>
            </div>
            <button @click="orderStatusChange" class="bg-lime-500 rounded-small w-full pt-5 pb-5 text-white font-sans font-normal hover:bg-lime-600 active:bg-lime-700 cursor-pointer">
                Оформить заказ
            </button>
        </div>
    </div>
</template>