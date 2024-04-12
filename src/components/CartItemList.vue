<script setup>
import { inject } from 'vue'

const drawerElements = inject('addedToDrawer')
console.log(drawerElements)

// const emit = defineEmits(['remove-from-drawer'])

const removeFromDrawer = (drawerElement) => {
    drawerElement.isAdded = ''
    drawerElements.value = drawerElements.value.filter(a => a.id !== drawerElement.id)
}
</script>
<template>
    <div class="grid grid-cols-1" v-auto-animate>
        <div
            v-for="(drawerElement) in drawerElements"
            :key="drawerElement.id"
            class="flex flex-col mb-5">
            <div class=" flex items-center border border-slate-200 rounded-small p-4 gap-4">
                <img class="w-16 h-16" :src="`/public${drawerElement.imageUrl}`" alt="sneaker">
                <div class="flex flex-col justify-between">
                    <p>{{ drawerElement.title }}</p>
                    <b>{{ drawerElement.price }} руб.</b>
                </div>
                <img @click="removeFromDrawer(drawerElement)" class="cursor-pointer opacity-50 hover:opacity-100 transition" src="/public/close.svg">
            </div>
        </div>
    </div>
</template>