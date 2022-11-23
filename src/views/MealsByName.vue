<template>
    <div class="p-8 ">
        <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals" @change="searchMeals" />
    </div>

    <div v-for="meal of meals" :key="meal.idMeal">
        <img :src="meal.strMealThumb" :alt="strMeal" />
        <h3> meal.strMeal </h3>
        <div>
            <a :href="meal.strYouTube" target="_blank">YouTube</a>
            <router-link>
                View </router-link>
        </div>
    </div>
    <pre>{{  meals  }}</pre>
</template>


<script setup>
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import store from '../store/index';


const keyword = ref('');

const meals = computed(() => store.state.searchedMeals)
function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

</script>    