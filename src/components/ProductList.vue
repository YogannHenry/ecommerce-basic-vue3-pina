<template>
    
    <div className='flex flex-wrap -m-4 '>
        <ProductListBestSeller :product="data.products"  />
    </div>
 

    <div class="container px-5 py-24 mx-auto w-screen ">
      <div class=" w-full mb-6 lg:mb-0 ">
          <h1 class="sm:text-5xl text-3xl font-black title-font mb-2 text-center text-gray-900 mt-20">Notre catalogue </h1>
          <p class=" w-full leading-relaxed text-3xl font-black text-gray-700 text-center">Il est temps de vous faire plaisir</p>
      
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