<template>
    <div class="flex flex-col p-8 ">
        <div class="item-center  justify-center"> <input type="text" class="rounded border-2 border-gray-200 w-full"
                placeholder="Search for Meals" /></div>
    </div>
    <div class="flex gap-3 justify-center mt-2">
        <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
            {{ letter }}</router-link>
    </div>
    <pre>{{ ingredients }}</pre>
</template> 

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import store from '../store';


const meals = computed(() => store.state.meals)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const ingredients = ref([])
onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    console.log(response.data)
    ingredients.value = response.data
})

</script> 