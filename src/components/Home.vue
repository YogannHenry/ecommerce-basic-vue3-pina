<template>



  <main class="text-gray-600 body-font  ">
    <div class="container px-5 py-24 mx-auto w-screen ">
      <div class="flex flex-wrap w-full mb-20 ">
        <div class=" w-full mb-6 lg:mb-0 ">
          <h1 class="sm:text-5xl text-3xl font-black title-font mb-2 text-center text-gray-900 mt-20">Une soif à étancher
          </h1>
          <p class=" w-full leading-relaxed text-3xl font-black text-gray-900 text-center">Nos best sellers</p>
        </div>        
      </div>
      <el-button type="warning" @click="scrollToCatalogue" justify="center" round>Accèder à notre catalogue complet</el-button>

      <ProductList />

    </div>
  </main>

  

</template>

<script setup>

import ProductList from "./product/ProductList.vue";


</script>

<script>
import intersectionCss from '../intersection.js';

export default {


  methods: {
    scrollToCatalogue() {
      const catalogueElement = document.getElementById('catalogue');
      if (catalogueElement) {
        catalogueElement.scrollIntoView({ behavior: 'smooth', inline: "nearest" });
      }
    }
  },
     mounted() {
    intersectionCss.observeImages();
  },
}
</script>

