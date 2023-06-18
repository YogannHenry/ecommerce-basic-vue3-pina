
<template>    
  <Header />    
    <RouterView />
    <Footer />
</template>


<script setup>
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
import { onMounted} from 'vue'
import { useShoppingStore } from './stores'

const store = useShoppingStore();

    onMounted(async () => {
      await store.loadProducts();
      await store.loadReviews()
    
    })




</script>




