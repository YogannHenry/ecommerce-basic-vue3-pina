<template>
    
    <div className='flex flex-wrap -m-4 '>
        <ProductListBestSeller :product="data.products"  />
    </div>
 

    <div class="container px-5 py-24 mx-auto w-screen ">
    <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Une soif à étancher</h1>
          <div class="h-1 w-20 bg-pink-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Découvrez notre catalogue complet</p>
      </div>
      </div>

    <div className='flex flex-wrap -m-4'>
        <ProductListItem  v-for="product in data.products" 
            :key="product.productId" :product="product" />
    </div>
    
</template>

<script setup>
import ProductListItem from './ProductListItem.vue'
import ProductListBestSeller from './ProductListBestSeller.vue'
import { useShoppingStore } from '../stores'

//récupérer les produits du JSON depuis le store
const data = useShoppingStore();
</script>

<style>
</style>