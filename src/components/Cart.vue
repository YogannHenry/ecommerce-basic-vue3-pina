<template>
    <div class="row my-4 text-gray-600 body-font">
        <div class="col-md-12 container px-5 py-24 mx-auto">
            <div class="">
                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table class="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th
                                    class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                    Image</th>
                                <th
                                    class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                    Nom</th>
                                <th
                                    class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                    Quantité</th>
                                <th
                                    class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                    Prix</th>
                                <th
                                    class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                                    Total/produit</th>
                                <th
                                    class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in data.getCartItems" :key="item.productId">

                                <td class="px-4 py-3 border-y-2 border-gray-200">
                                    <img :src="item.productPicture" class="fluid rounded" width="60" height="60"
                                        :alt="item.productName" />
                                </td>
                                <td class="px-4 py-3 border-y-2 border-gray-200">
                                    {{ item.productName }}
                                </td>
                                <td class="px-4 py-3 border-y-2 border-gray-200">
                                    <i @click="data.incrementQ(item)"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </i>
                                    <span class="mx-2">
                                        {{ item.quantity }}
                                    </span>
                                    <i @click="data.decrementQ(item)"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </i>
                                </td>
                                <td class="px-4 py-3 text-lg text-gray-900 border-y-2 border-gray-200">
                                    {{ item.productPrice }}€
                                </td>
                                <td class="px-4 py-3 border-y-2 border-gray-200">
                                    {{ item.productPrice * item.quantity }}€
                                </td>
                                <td class="px-4 py-3 border-y-2 border-gray-200">
                                    <i @click="data.removeFromCart(item)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </i>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="3" class="text-center p-4 font-bold bg-red-300 rounded-bl-full">
                                    Total
                                </th>
                                <td colSpan="3" class="text-center font-bold rounded-br-full  bg-slate-200 ">
                                    <span class="badge bg-danger rounded-pill">
                                        {{ data.cartItems.reduce((acc, item) => acc += item.productPrice * item.quantity, 0)
                                        }}€
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <RouterLink class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to="/">Retour au shopping
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </RouterLink>
                    <button
                        class="flex ml-auto text-black bg-red-300 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded">Valider</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useShoppingStore } from "../stores"

const data = useShoppingStore();
</script>

<style>i {
    cursor: pointer;
}</style>