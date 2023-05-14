<template>
    <div class="xl:w-1/4 md:w-1/2 p-4 intersection" data-color="rgb(255 255 255 )">
        <div>
            <div class="bg-c3 p-6 rounded-lg h-101 flex align-center ">
                <img class="rounded mb-6 object-contain  sm:h-100% p-5 " :src="product.productPicture"
                    alt="content">
            </div>
            <h3 class="tracking-widest text-red-400 text-xs font-medium title-font">{{ product.productEAN }}</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font">{{ product.productName }}</h2>
            <p class="leading-relaxed text-base">{{ product.productPrice }}€</p>
            <button @click="data.addToCart(product)" class="p-2 bg-red-300 hover:bg-red-400 rounded-lg shadow ease-out mb-4">
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

<style></style>