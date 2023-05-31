<template>

<div id="catalogue" class="container px-5 py-24 mx-auto w-screen ">
      <div class=" w-full mb-6 lg:mb-0 ">
          <h1  class="sm:text-5xl text-3xl font-black title-font mb-2 text-center text-gray-900 mt-20">Notre catalogue </h1>
          <p class=" w-full leading-relaxed text-3xl font-black text-gray-700 text-center">Il est temps de vous faire plaisir</p>      
        </div>
      </div>   


  <!-- -------------------------------------------------------------------- -->
  <!------------------------------- block input ------------------------------>
  <!-- -------------------------------------------------------------------- -->

  <el-select class="p-4" v-model="value" clearable placeholder="Filtrer par catégorie" @change="updateSelectedOption">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>



  <!-- -------------------------------------------------------------------- -->
  <!------------------------------- block appel des produits en fonction du choix réalisé ------------------------------>
  <!-- -------------------------------------------------------------------- -->


  <div class="flex flex-wrap -m-4">
    <ProductListItem v-for="product in productFilter" :key="product.productId" :product="product" />
  </div>
</template>
  
   <!-- -------------------------------------------------------------------- -->
    <!-------------------------------  import ------------------------------>
    <!-- -------------------------------------------------------------------- -->


<script setup>
import { ref, computed} from 'vue'
import ProductListItem from './ProductListItem.vue'
import { useShoppingStore } from '../../stores'

// <!-- -------------------------------------------------------------------- -->
//     <!------------------------------- appel du JSON ------------------------------>
//     <!-- -------------------------------------------------------------------- -->

const data = useShoppingStore()

// <!-- -------------------------------------------------------------------- -->
//     <!-------------------------------  JS de l'input fourni par Element plus ------------------------------>
//     <!-- -------------------------------------------------------------------- -->

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
  {
    value: 'prix-croissant',
    label: 'prix croissant',
  },
  {
    value: 'prix-décroissant',
    label: 'prix décroissant',
  },
]


// <!-- -------------------------------------------------------------------- -->
//     <!-------------------------------  on recharge la valeur de selectedOption à chaque modification avec @change="updateSelectedOption" (voir le html)------------------------------>
//     <!-- -------------------------------------------------------------------- -->

const selectedOption = ref('')

const updateSelectedOption = () => {
  selectedOption.value = value.value
}

// Filtrez les produits en fonction du choix du user:
const productFilter = computed(() => {

  if (selectedOption.value == "prix-croissant") {
    const productPrices = data.products.sort((minPrice, maxPrice) => minPrice.productPrice - maxPrice.productPrice);
    return productPrices;

  } else {

    if (selectedOption.value == "prix-décroissant") {
      const productPrices = data.products.sort((minPrice, maxPrice) => maxPrice.productPrice - minPrice.productPrice);
      return productPrices;

    } else {

      if (selectedOption.value) {
        return data.products.filter(product => product.category === selectedOption.value);

      } else {

        return data.products;
      }
    }
  }
}
);



</script>
  