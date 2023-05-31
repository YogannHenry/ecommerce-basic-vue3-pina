<template>
    
    <div className='flex flex-wrap -m-4 '>
        <ProductListBestSeller :product="data.products"  />
    </div>

    

      <FilterProductInput/>
    
</template>

<script setup>
import ProductListBestSeller from './ProductListBestSeller.vue'
import FilterProductInput from './FilterProductInput.vue';
import { useShoppingStore } from '../../stores'


//récupérer les produits du JSON depuis le store
const data = useShoppingStore();
</script>

