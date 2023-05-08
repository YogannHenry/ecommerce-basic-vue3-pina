<script>
import productsData from '../assets/data/products (1).json'

export default {
  data() {
    return {
      products: productsData,
    };
  },
};

</script>

<template>
  <div class="home">
    <div class="cardProduct" v-for="product in products" :key="product.productId">
      <div class="product-image">
        <img :src="product.productPicture" alt="WTF" />
      </div>
      <p class="product-name">{{ product.productName }}</p>
      <p class="product-ref">{{ product.productEAN }}</p>
      <div class="product-price">
        <p>{{ product.productPrice }}€</p>
      </div>
      <button class="button" @click="addToCart">
        Ajouter
      </button>
      <button class="button" @click="removeFromCart">
        Supprimer
      </button>


    </div>


  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
}

.cardProduct {
  display: flex;
  width: 25em;
  height: 30em;
  border: solid 1px gray;
  box-shadow: 5px 5px 5px 5px black;
  background-color: aqua;

}

img {
  width: 5em;
  position: absolute;
}

.product-name {
  color: brown;
}

.button {  
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height: 60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
  top: 80%;
  right: 30%;
  margin: 0.5em;
}

</style>