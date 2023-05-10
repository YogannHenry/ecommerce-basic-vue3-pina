
<template>
    <header class=" py-4 w-screen">
        <div class="flex justify-between px-20 bg">
            <div class="w-1/3 flex">
                <img src="../public/image/OIG.jpg" alt="logo">
            </div>
            <div class="w-120 border border-gray-300 rounded-full shadow-lg px-6 py-1 ml-3.5 ">
                <div class="flex justify-center">
                    <div class="p-2 ">blop</div>
                    <RouterLink class="p-2 text-red " to="/">Home</RouterLink>
                    <div class="px-8 py-2  border-x-rose-900">blip</div>
                    <div class="p-2">bloup</div>
                </div>
            </div>
           
                <div class="w-1/3 px-6 py-1  ">
                    <nav>
                        <ul class="flex justify-end">
                            <li class="p-2">connexion</li>
                            <li class="px-8 py-2">inscription</li>
                            <RouterLink class="p-2 bg-red-300 hover:bg-yellow-200 rounded-lg shadow ease-out"  to="/cart">Panier ({{data.countCartItems}})</RouterLink>
                        </ul>
                    </nav>
                </div>
            
        </div>
    </header>
  
  <RouterView />
</template>

<script setup>
    import { useShoppingStore } from './stores'
    //get store
    const data = useShoppingStore();
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  padding: 1em;
  box-shadow: 0 4px 2px -2px gray;
}

</style>
