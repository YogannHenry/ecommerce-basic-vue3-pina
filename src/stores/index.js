import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import productData from '../products.json'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: productData,
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.productId === item.productId);
            if(index !== -1) {
              this.products[index].quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Votre produit à été ajouté au panier',
                showConfirmButton: false,
                timer: 1500
              });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Votre produit à été ajouté au panier',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.productId === item.productId);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'La quantitée a été mise à jour',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.productId === item.productId);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.productId !== item.productId);
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'La quantitée a été mise à jour',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.productId !== item.productId);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Le produit a été retiré du panier',
              showConfirmButton: false,
              timer: 1500
            });
        }
        
    },
})