
<template>    
    <Header />
    <RouterView />
</template>

<script setup>
import Header from "./components/Header.vue";
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
