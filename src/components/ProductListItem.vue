<template>
    <div class="xl:w-1/4 md:w-1/2 p-4 intersection" data-color="rgb(255 255 255 )">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" :src="product.productPicture" alt="content">
            <h3 class="tracking-widest text-red-400 text-xs font-medium title-font">{{ product.productEAN }}</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{{ product.productName }}</h2>
            <p class="leading-relaxed text-base">{{ product.productPrice }}€</p>
            <button 
                @click="data.addToCart(product)"
                class="p-2 bg-red-300 hover:bg-yellow-200 rounded-lg shadow ease-out">
                <i></i> add to cart
            </button>
          </div>
        </div>
        
</template>

<script setup>
    import { useShoppingStore } from '../stores'
    //get props
    const props = defineProps({
        product: {
            type: Array,
            required: true
        }
    });
    //get store
    const data = useShoppingStore();
</script>

<style>

</style>