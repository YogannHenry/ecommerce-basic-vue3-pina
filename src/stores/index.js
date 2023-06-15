import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { createReviews, getProducts, getReviews } from "../API/api";

export const useShoppingStore = defineStore("shopping", {
  state: () => {
    return {
      products: [],
      cartItems: [],
      reviews: []
    };
  },
  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
    getCartItems() {
      return this.cartItems;
    },
  },
  getProductById() {
    return this.$route.params.id;
  },

  actions: {
    async loadProducts() {
      try {
        const products = await getProducts();        
        this.products = products.data.data;
      } catch (error) {
        console.error("error", error);
        throw error;
      }
    },

    loadProductById(productId) {
      return products.find((product) => product.id === this.productId);
    },

    async loadReviews() {
        try {
            const reviews = await getReviews();            
            this.reviews = reviews.data.data;
          } catch (error) {
            console.error("errorloadReviews", error);
            throw error;
          }
        },
        
    async pushReviews(data) {
        try {
            const reviews = await createReviews(data);            
            this.reviews = reviews.data.data;
          } catch (error) {
            console.error("errorpushReviews", error);
            throw error;
          }
        },


    productFilter(paramètre) {
      if (paramètre == "prix-croissant") {
        return this.products.sort(
          (minPrice, maxPrice) =>
            minPrice.attributes.productPrice - maxPrice.attributes.productPrice
        );
      } else {
        if (paramètre == "prix-décroissant") {
          return this.products.sort(
            (minPrice, maxPrice) =>
              maxPrice.attributes.productPrice -
              minPrice.attributes.productPrice
          );
        } else {
          if (paramètre) {
            return this.products.filter(
              (product) => product.attributes.category === paramètre
            );
          } else {
            return this.products;
          }
        }
      }
    },

    addToCart(item) {
      let index = this.cartItems.findIndex(
        (product) => product.productId === item.productId
      );
      if (index !== -1) {
        this.products[index].quantity += 1;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Votre produit à été ajouté au panier",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        item.quantity = 1;
        this.cartItems.push(item);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Votre produit à été ajouté au panier",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    incrementQ(item) {
      let index = this.cartItems.findIndex(
        (product) => product.productId === item.productId
      );
      if (index !== -1) {
        this.cartItems[index].quantity += 1;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "La quantitée a été mise à jour",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    decrementQ(item) {
      let index = this.cartItems.findIndex(
        (product) => product.productId === item.productId
      );
      if (index !== -1) {
        this.cartItems[index].quantity -= 1;
        if (this.cartItems[index].quantity === 0) {
          this.cartItems = this.cartItems.filter(
            (product) => product.productId !== item.productId
          );
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "La quantitée a été mise à jour",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(
        (product) => product.productId !== item.productId
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Le produit a été retiré du panier",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
});
