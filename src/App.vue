
<template>
  <header>
    
      <nav>
        <RouterLink class="subtitle " to="/">Home</RouterLink>
        <RouterLink class="subtitle"  to="/about">Panier</RouterLink>
      </nav>
    
  </header>

  <RouterView />
</template>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  padding: 1em;
  box-shadow: 0 4px 2px -2px gray;
}


.subtitle{
padding: 1em;
font-size: 1.3em;
font-weight: bold;
color: rgb(245, 84, 84);

}

.subtitle:hover{
  color: rgb(240, 240, 169)
}


</style>
