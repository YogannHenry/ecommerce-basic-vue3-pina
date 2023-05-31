<template>
      <FavorisList/>
</template>

<script setup>
import FavorisList from './FavorisList.vue'
import { favorisStore } from '../../stores/favoris'


const data = favorisStore();
</script>