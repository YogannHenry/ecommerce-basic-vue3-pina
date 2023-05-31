<template>
    <section class="text-gray-600 body-font overflow-hidden ">
        <div class="container px-5 py-24 mx-auto intersection mb-32 ">
            <div class="lg:w-4/5 mx-auto flex flex-wrap justify-evenly  rounded-lg shadow-3xl bg-c1"
                data-color="rgb(184 61 52 )">

                <img alt="ecommerce" class="w-80 object-cover rounded p-5 "
                    :src="productFilterBestSeller[0].productPicture">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-slate-50 tracking-widest">{{ productFilterBestSeller[0].productEAN }}
                    </h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ productFilterBestSeller[0].productName
                    }}</h1>
                    <cardTemplateSvgStuff />
                    <div class="flex py-4">
                        <span class="title-font font-medium text-2xl text-gray-900">{{ product[0].productPrice }}€</span>
                        <button @click="data.addToCart(product[0])"
                            class="flex ml-auto text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded">Ajouter
                            au panier</button>
                        <button @click="favoris.addToFavoris(item[8])"
                            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-slate-50 ml-4 hover:bg-red-400">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-5 py-24 mx-auto mb-32">
            <div class="lg:w-4/5 mx-auto flex flex-wrap justify-evenly  rounded-lg shadow-3xl intersection  bg-c2"
                data-color="rgb(57 108 114) ">

                <img alt="ecommerce" class="w-80 object-cover rounded  p-5" :src="product[1].productPicture">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-slate-50 tracking-widest">{{ product[1].productEAN }}</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product[1].productName }}</h1>
                    <cardTemplateSvgStuff />
                    <div class="flex py-4">
                        <span class="title-font font-medium text-2xl text-gray-900">{{ product[1].productPrice }}€</span>
                        <button @click="data.addToCart(product[1])"
                            class="flex ml-auto text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded">Ajouter
                            au panier</button>
                        <button
                            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-slate-50 ml-4  hover:bg-red-400">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-5 py-24 mx-auto mb-20">
            <div class="lg:w-4/5 mx-auto flex flex-wrap justify-evenly  rounded-lg shadow-3xl intersection  bg-c3 "
                data-color="rgb(167 194 216)">

                <img alt="ecommerce" class="w-80 object-cover rounded p-5 " :src="product[2].productPicture">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-slate-50 tracking-widest">{{ product[2].productEAN }}</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product[2].productName }}</h1>
                    <cardTemplateSvgStuff />
                    <div class="flex py-4">
                        <span class="title-font font-medium text-2xl text-gray-900">{{ product[2].productPrice }}€</span>
                        <button @click="data.addToCart(product[2])"
                            class="flex ml-auto text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded">Ajouter
                            au panier</button>
                        <button
                            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-slate-50 ml-4 hover:bg-red-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path>
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06
                                    1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { useShoppingStore } from '../../stores/index'
import { favorisStore } from '../../stores/favoris'
import { ref, computed } from 'vue'
import cardTemplateSvgStuff from '../cardTemplateSvgStuff.vue'

//get props
const props = defineProps({
    product: {
        type: Array,
        required: true
    },

    item: {
        type: Array,
        required: true
    }
});

//get store
const data = useShoppingStore();
const favoris = favorisStore();

const productFilterBestSeller = computed(() => {

    const productBestSeller = data.products.sort((minPrice, maxPrice) => maxPrice.productNumberSellingScore - minPrice.productNumberSellingScore);
    const threeBestSellerProduct = productBestSeller.slice(0, 3);
    return threeBestSellerProduct
}
);

</script>
