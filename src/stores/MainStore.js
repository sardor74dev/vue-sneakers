import { defineStore } from "pinia";
import { ref, reactive, onMounted, watch, computed } from 'vue'
import axios from 'axios';

export const useMainStore = defineStore("MainStore", () => {

    const cards = ref([])

    const filter = reactive({
        sortBy: 'title',
        searchQuery: '',
    })

    const onChange = (event) => {
        filter.sortBy = event.target.value
    }
    const onChangeInput = (event) => {
        filter.searchQuery = event.target.value
    }

    const addingToDrawer = (card) => {
        if (card.isAdded){
            card.isAdded = ''
            addedToDrawer.value = addedToDrawer.value.filter(a => a.id !== card.id)
        } else {
            card.isAdded = 'true'
            addedToDrawer.value.push(card)
        }
    }

    const fetchingItems = async() => {
        try {

            const params = {
                sortBy: filter.sortBy
            }

            if (filter.searchQuery) {
                params.title = `*${filter.searchQuery}*`
            }

            const { data } = await axios.get(`https://55ecd8c7c2f29fa8.mokky.dev/cards`, {
                params
            })

            cards.value = data

        } catch(err) {
            console.log(err)
        }
    }

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

    watch(filter, fetchingItems)
    onMounted(fetchingItems)

    watch(addedToDrawer, (newVal) => {
        localStorage.setItem('addedToDrawer', JSON.stringify(newVal))
    }, { deep: true })

    onMounted(() => {
        addedToDrawer.value = JSON.parse(localStorage.getItem('addedToDrawer')) || []
    })

    const favorites = ref([])

    const onClickAddToFav = (card) => {
        if (card.isFavorite) {
            card.isFavorite = '';
            favorites.value = favorites.value.filter((favorite) => favorite.id !== card.id);
        } else {
            card.isFavorite = 'true';
            // favorites.value.push(card);
            favorites.value.push({ ...card })
        }
    
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    }

    const removeFromDrawer = (drawerElement) => {
        drawerElement.isAdded = ''
        addedToDrawer.value = addedToDrawer.value.filter(a => a.id !== drawerElement.id)
    }

    // watch(favorites, (newVal) => {
    //     localStorage.setItem('favorites', JSON.stringify(newVal))
    // }, { deep:true })

    // onMounted(()=> {
    //     favorites.value = JSON.parse(localStorage.getItem('favorites')) || [];

    //     cards.value.forEach((card) => {
    //         card.isFavorite = favorites.value.some((favorite) => favorite.id === card.id);
    //     });
    // })

    onMounted(() => {
        // Загрузка favorites из localStorage
        favorites.value = JSON.parse(localStorage.getItem('favorites')) || [];

        // Обновление состояния карточек
        cards.value.forEach((card) => {
            card.isFavorite = favorites.value.some((favorite) => favorite.id === card.id);
        });
    });

    // Сохранение favorites в localStorage при изменении
    watch(
        favorites,
        (newVal) => {
            localStorage.setItem('favorites', JSON.stringify(newVal));
        },
        { deep: true }
    );

    return {
        onChange,
        onChangeInput,
        openDrawer,
        closeDrawer,
        drawerOpen,
        sumPrice,
        tax,
        cards,
        onClickAddToFav,
        addingToDrawer,
        removeFromDrawer,
        addedToDrawer,
        favorites
    }

})