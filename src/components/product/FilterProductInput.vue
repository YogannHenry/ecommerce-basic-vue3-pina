<template>
  <div id="catalogue" class="container px-5 py-24 mx-auto w-screen ">
    <div class="w-full mb-6 lg:mb-0">
      <h1 class="sm:text-5xl text-3xl font-black title-font mb-2 text-center text-gray-900 mt-20">Notre catalogue</h1>
      <p class="w-full leading-relaxed text-3xl font-black text-gray-700 text-center">Il est temps de vous faire plaisir</p>
    </div>

    <el-select class="p-4" v-model="InputFilterProduct" clearable placeholder="Filtrer par catégorie" @change="loadProducts">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>

    <div class="flex flex-wrap -m-4">
      <ProductListItem v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import ProductListItem from './ProductListItem.vue';
import { useShoppingStore } from '../../stores';

const store = useShoppingStore();

const InputFilterProduct = ref('');

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
];

const loadProducts = () => {
  store.InputFilterProduct = InputFilterProduct.value;
  store.loadProducts();
};

onMounted(() => {
  loadProducts();
});

const filteredProducts = computed(() => store.products);

console.log('InputFilterProduct:', InputFilterProduct);
console.log('filteredProducts:', filteredProducts);
</script>
