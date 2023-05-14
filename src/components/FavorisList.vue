<template>
    <section class="text-gray-600 body-font">

        <div  v-for="product in data.getFavorisItems" 
            :key="product.productId" class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center"
                :src="product.productPicture">
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{{ product.productName }}</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ product.productEAN }}</h1>
                    <p class="leading-relaxed">{{ product.productPrice }}€</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { favorisStore } from '../stores/favoris'


const data = favorisStore();
</script>