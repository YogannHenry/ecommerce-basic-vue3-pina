import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { getProducts, getReviews } from "../API/api";

export const useShoppingStore = defineStore("shopping", {
  state: () => {
    return {
      products: [],
      cartItems: [],
      ProductsReviews: [],
      ProductReview: [],
      InputFilterProduct: ""
    };
  },
  getters: {
    countCartItems() {
      return this.cartItems.length;
    },
    getCartItems() {
      return this.cartItems;
    },
    getProductById(state) {
      return (productId) =>
        state.products.find((product) => product.id === productId);
    }
  },

  actions: {
    async loadProducts() {
      try {
        const params = {};
    
        if (this.InputFilterProduct === "prix-croissant") {
          params.sort = "productPrice:asc";
        } else if (this.InputFilterProduct === "prix-décroissant") {
          params.sort = "productPrice:desc";
        } else if (this.InputFilterProduct) {
          params.sort = this.InputFilterProduct;
        }
    
        const products = await getProducts(params);
        this.products = products.data.data;
      } catch (error) {
        console.error("loadError", error);
        throw error;
      }
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

    async pushReviews(reviewData) {

      try {
        const reviews = await createReviews(reviewData);
        this.reviews = reviews.data.data;
      } catch (error) {
        console.error("errorpushReviews", error);
        throw error;
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

}


});
