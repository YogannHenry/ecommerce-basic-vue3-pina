<template>
  <section class="text-gray-600 body-font overflow-hidden bg-slate-200">
    <div class="container p-24 mx-auto intersection m-20 ">
      <div class="lg:w-4/5 mx-auto flex flex-wrap justify-evenly  rounded-lg shadow-3xl bg-c2"
        data-color="rgb(184 61 52 )">

        <img alt="ecommerce" class="w-80 object-cover rounded p-5 " :src="product.productPicture">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
          <h2 class="text-sm title-font text-black tracking-widest">{{ product.productEAN }}
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ product.productName}}
          </h1>

          <CardTemplateSvgStuff />

          <div class="flex py-4 ">
            <span class="title-font font-medium text-2xl text-gray-900">{{ product.productPrice }}€</span>
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

<script>

import productData from '../../products.json'
import CardTemplateSvgStuff from '../cardTemplateSvgStuff.vue';
import FormReviewsTailwind from '../FormReviewsTailwind.vue';
import FormReviewsElementPlus from '../FormReviewsElementPlus.vue';
import { ref } from 'vue'



export default {
  computed: {
    // on récupère l'id de l'url
    productId() {
      return this.$route.params.id;
    },
    // on compare la valeur de l'id avec celui de l'objet
    product() {
      return productData.find(product => product.productId === this.productId);
    }
  },
  components: { CardTemplateSvgStuff, FormReviewsTailwind, FormReviewsElementPlus}
}

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 10%;
  display: block;
}
</style>

