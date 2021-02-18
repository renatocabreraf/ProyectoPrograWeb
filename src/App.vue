<template>
  <div id="app">
    <nav>
      <router-link to="/"  class="logo-item"><img src="./assets/Logo2.png"></router-link> |
      <router-link to="/historia" class="menu-item" >Historia de Hot Wheels</router-link> |
      <router-link to="/tipos" class="menu-item" >Tipos de Piezas</router-link> |
      <router-link to="/coleccion" class="menu-item">Colección de Usuarios</router-link> |
      <router-link to="/piezas" class="menu-item">Piezas a Buscar</router-link> |
      <router-link to="/mercado" class="menu-item">Mercado Online</router-link>
    </nav>
    <router-view/> 
  </div>
  
</template>

<style>

body, html{
  background: black;
  color: wheat;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  
}

nav{
   display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(https://wallpapercave.com/wp/wp2970027.jpg);
}

nav .menu-item{
    color: rgb(0, 0, 0);
    font-size: 15.7pt;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover{
    background-color: #444;
    border-bottom: #ff5858;
}

nav .menu-item a{
    color:inherit;
    text-decoration: none;
    font-family: 'Roboto';
    src: './fonts/Roboto-LightItalic.ttf';
}
</style>
