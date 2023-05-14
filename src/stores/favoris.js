import { defineStore } from 'pinia'
import productData from '../products.json'

export const favorisStore = defineStore('shopping', {
    state: () => {
        return { 
            item: productData,
            favorisItems : []
        }
    },
    getters: {
        countFavorisItems(){
            return this.favorisItems.length;
        },
        getFavorisItems(){
            return this.favorisItems;
        }
    },
    actions: {
        addToFavoris(product) {
            let index = this.favorisItems.findIndex(item => item.productId === product.productId);
            if(index !== -1) {
              this.item[index].quantity += 1;
             
            }else {
              item.quantity = 1;
              this.favorisItems.push(product);
             
            }
        },

        removeFromFavoris(product) {
            this.favorisItems = this.favorisItems.filter(item => item.productId !== product.productId);
       
        }
        
    },
})