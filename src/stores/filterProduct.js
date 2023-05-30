import { defineStore } from 'pinia';
import axios from 'axios';
import productData from '../products.json'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: productData,
    products: [],
  }),

  getters: {
    filteredProductsByPrice: (state) => (minPrice, maxPrice) => {
      return state.products.filter((product) => {
        return product.productPrice >= minPrice && product.productPrice <= maxPrice;
      });
    },
    filteredProductsByCategory: (state) => (minPrice, maxPrice) => {
        return state.products.filter((product) => {
          return product.productPrice >= minPrice && product.productPrice <= maxPrice;
        });
      },
  },

  actions: {
    async fetchProducts() {
        try {
            const response = await axios.get('../products.json');
            this.products = response.data;
          } catch (error) {
            console.error('Erreur lors de la récupération des produits :', error);
          }
    },
  },



});
