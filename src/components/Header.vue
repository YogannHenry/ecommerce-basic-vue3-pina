<template>
    <header class=" py-4 w-screen  text-gray-600 body-font xl:fixed bg-slate-50">
        <div class="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
            <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-16">
                <a href="https://yogannhenry.github.io/" target="_blank">
                    <img class="h-14" src="../../public/image/pngegg.png" alt="logo">
                </a>
                <span class="ml-3 text-xl">Drink is so goood</span>
            </div>
            <div
                class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  md:border border-gray-300 rounded-full shadow-lg p-1 px-2 hover:shadow-xl ">
                <div class="flex justify-center">
                    <RouterLink class="p-2 text-red " to="/">Home</RouterLink>
                    <div class="p-2 ">A propos</div>
                    <a href="https://yogannhenry.github.io/contact.html" target="_blank">
                        <div class="px-8 py-2  border-x-rose-900">Contact</div>
                    </a>
                    <RouterLink to="/favoris" class="p-2">Mes favoris</RouterLink>
                </div>
            </div>

            <div class="mt-4 md:mt-0">
                <nav>
                    <ul class="flex justify-space-between mb-4 flex-wrap gap-4">
                        <el-button v-for="button in buttons" :key="button.text" :type="button.type" link>{{ button.text
                        }}</el-button>
                        <RouterLink to="/cart"> <el-button type="danger" plain>Panier
                                ({{ data.countCartItems }})</el-button>
                        </RouterLink>
                    </ul>
                </nav>
            </div>

        </div>
    </header>
</template>

<script setup>
import { useShoppingStore } from '../stores'
const data = useShoppingStore();

const buttons = [
  { type: '', text: 'connection' },
  { type: '', text: 'inscription' },

] ;

</script>