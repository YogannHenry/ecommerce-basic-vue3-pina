<template>
    <!-- -------------------------------------------------------------------- -->
    <!------------------------------- block input ------------------------------>
    <!-- -------------------------------------------------------------------- -->

    <el-select class="p-4" v-model="value" clearable placeholder="Filtrer par catégorie" @change="updateSelectedOption">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <!-- -------------------------------------------------------------------- -->
    <!------------------------------- block appel des produits en fonction du choix réalisé ------------------------------>
    <!-- -------------------------------------------------------------------- -->


    <div class="flex flex-wrap -m-4">      
      <ProductListItem v-for="product in productFilter" :key="product.productId" :product="product" />
    </div>
  </template>
  
   <!-- -------------------------------------------------------------------- -->
    <!------------------------------- Script et import ------------------------------>
    <!-- -------------------------------------------------------------------- -->


  <script setup>
  import { ref, computed, watch } from 'vue'
  import ProductListItem from './ProductListItem.vue'
  import { useShoppingStore } from '../stores'
  
  const data = useShoppingStore()
  
  const value = ref('')
  const options = [
    {
      value: 'alcoolisé',
      label: 'alcoolisé',
    },
    {
      value: 'pétillant',
      label: 'pétillant',
    },
  ]
  
  const selectedOption = ref('')
  
  const updateSelectedOption = () => {
    selectedOption.value = value.value
  }
  
//   On filtre les produits dès que le user change de valeur
  watch(selectedOption, () => {
    console.log("selectedOption", selectedOption.value)
  })
  
  // Filtrez les produits initialement
  const productFilter = computed(() => {
  if (selectedOption.value) {
    return data.products.filter(product => product.category === selectedOption.value);
  } else {
    return data.products;
  }
});
  
  </script>
  