<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { inject } from 'vue'
import CardList from '../components/CardList.vue'

const addedToDrawer = inject('addedToDrawer')

</script>
<template>
    <div>
        <h2 class="text-3xl font-bold mt-[42px] mb-8">Мои закладки</h2>
        <CardList
            :addedToDrawer="addedToDrawer"
        />
    </div>
</template>