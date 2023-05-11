<template>
  <section class="text-gray-600 body-font ">
    <div class="container px-5 py-24 mx-auto w-screen ">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Une soif à étancher</h1>
          <div class="h-1 w-20 bg-pink-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Nos best sellers</p>
      </div>

      <ProductList />
    </div>
  </section>
  <Footer />
</template>

<script setup>
import ProductList from "./ProductList.vue";
import Footer from "./Footer.vue";
</script>

<style></style>