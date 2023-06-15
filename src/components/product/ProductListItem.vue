<template>
    <div class="xl:w-1/4 md:w-1/2 p-4 intersection" data-color="rgb(255 255 255)">
        <div>
            <div class="bg-gray-200 p-6 rounded-lg h-101 flex align-center ">
                <Router-link :to="'/productDetail/' + product.id">
                    <img class="rounded mb-6 object-contain  sm:h-100% p-5 " :src="product.attributes.productPicture"
                    alt="content">
                </Router-link>
            </div>
            <h3 class="tracking-widest text-red-400 text-xs font-medium title-font">{{ product.attributes.productEAN }}</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font">{{ product.attributes.productName }}</h2>
            <p class="leading-relaxed text-base">{{ product.attributes.productPrice }}€</p>
            <button @click="data.addToCart(product)" class="p-2 bg-red-300 hover:bg-red-400 rounded-lg shadow ease-out mb-4">
                <i></i> Ajouter au panier
            </button>

        </div>
    </div>
</template>

<script setup>
import { useShoppingStore } from '../../stores'

//get props
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
//get store
const data = useShoppingStore();
</script>

<style></style>