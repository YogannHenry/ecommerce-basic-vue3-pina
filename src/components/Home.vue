<template>

  <Header />

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

  <Footer />

</template>

<script setup>

import ProductList from "./product/ProductList.vue";
import Footer from "./partials/Footer.vue";
import Header from "./partials/Header.vue";



</script>

<script>
import intersectionCss from '../intersection.js';

export default {
  mounted() {
    intersectionCss.observeImages();
  },

  methods: {
    scrollToCatalogue() {
      const catalogueElement = document.getElementById('catalogue');
      if (catalogueElement) {
        catalogueElement.scrollIntoView({ behavior: 'smooth', inline: "nearest" });
      }
    }
  }
}
</script>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
    text-align: center;
    padding: 1em;
    box-shadow: 0 4px 2px -2px gray;
}
</style>
