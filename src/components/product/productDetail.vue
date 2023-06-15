<template>
  <section v-if="product" class="text-gray-600 body-font overflow-hidden bg-slate-200">
    <div class="container p-24 mx-auto intersection m-20 ">
      <div class="lg:w-4/5 mx-auto flex flex-wrap justify-evenly  rounded-lg shadow-3xl bg-c2"
        data-color="rgb(184 61 52 )">

        <img alt="ecommerce" class="w-80 object-cover rounded p-5 " :src="product.attributes.productPicture">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
          <h2 class="text-sm title-font text-black tracking-widest">{{ product.attributes.productEAN }}
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.attributes.productName }}
          </h1>

          <CardTemplateSvgStuff />

          <div class="flex py-4 ">
            <span class="title-font font-medium text-2xl text-gray-900">{{ product.attributes.productPrice }}€</span>
            <button @click="data.addToCart(product[0])"
              class="flex ml-auto text-black bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded">Ajouter
              au panier</button>
            <button @click="favoris.addToFavoris(item[8])"
              class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-black ml-4 hover:bg-red-400">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                </path>
              </svg>
            </button>

          </div>

        </div>
      </div>

      <FormReviewsElementPlus />



    </div>



  </section>
</template>



<script setup>
import CardTemplateSvgStuff from '../cardTemplateSvgStuff.vue';
// import FormReviewsTailwind from '../FormReviewsTailwind.vue';
import FormReviewsElementPlus from "../Reviews/FormReviewsElementPlus.vue"
import { computed, onMounted, ref } from 'vue'
import { useShoppingStore } from '../../stores'
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute()
const store = useShoppingStore();

const { products } = storeToRefs(store)

const productId = computed(() => route.params.id);
const product = computed(() => {
  console.log("produitValue", products.value,  products.value.find(product => product.id === productId.value))
  return products.value.find(product => product.id === parseInt(productId.value))
});




const { reviews } = storeToRefs(store);

onMounted(async () => {
  await store.loadReviews()
  console.log("reviews", reviews.value)
})
</script>