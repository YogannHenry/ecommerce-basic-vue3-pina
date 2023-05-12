<template>
  <main class="text-gray-600 body-font  ">
    <div class="container px-5 py-24 mx-auto w-screen  ">
      <div class="flex flex-wrap w-full mb-20 ">
        <div class=" w-full mb-6 lg:mb-0 ">
          <h1 class="sm:text-5xl text-3xl font-black title-font mb-2 text-center text-gray-900">Une soif à étancher</h1>
          <p class=" w-full leading-relaxed text-3xl font-black text-gray-900 text-center">Nos best sellers</p>
      
        </div>
      </div>
 
      <ProductList />
    </div>
  </main>
  <Footer />
</template>

<script setup>
import ProductList from "./ProductList.vue";
import Footer from "./Footer.vue";

</script>

<style></style>