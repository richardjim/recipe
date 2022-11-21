<template>
    <div class="bg-grey-100 h-full">
        <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
            <router-link :to="{ name: 'home' }">
                Home</router-link>
            <div>
                <router-link to="/" class="inline-block px-2 h-full hover:bg-purple-200">Search Meals</router-link>
            </div>
            <div>
                <router-link to="/" class="inline-block px-2 h-full hover:bg-purple-200">Meals By Letter</router-link>
            </div>
            <div>
                <router-link to="/" class="inline-block px-2 h-full hover:bg-purple-200">Meals By Ingredient
                </router-link>
            </div>
        </header>
        <main>
            <router-view />
        </main>
    </div>

</template>

<script setup>

</script>

<style scoped>

</style>
   