<template>
<div>
    <nav class="navbar">
      <router-link to="/home"  class="logo-item"><img src="../assets/Logo2.png"></router-link> |
      <router-link to="/historia" class="menu-item" >Historia de Hot Wheels</router-link> |
      <router-link to="/tipos" class="menu-item" >Tipos de Piezas</router-link> |
      <router-link to="/Coleccionistas.html" class="menu-item">Coleccionistas</router-link> |
      <router-link to="/piezas" class="menu-item">Piezas a Buscar</router-link> |
      <router-link to="/mercado" class="menu-item">Mercado Online</router-link>
      <br>
      <input type="search" size="sm" class="mr-sm-2 searchbox" placeholder="Search...">
      <a class="nav-icon" href="#"><span class="iconify" data-inline="false" data-icon="pixelarticons:search" style="color: #ffffff; font-size: 36px;"></span></a>
    
    </nav>
</div>
</template>
<script>

export default {
     name: 'Navbar'
}
</script>

<style>
body, html{
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
}

.navbar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
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
      margin-right:auto;
  justify-content:center;
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
    text-align: center;
}

nav .menu-item.active,
nav .menu-item:hover{
    background-color: white;
    border-bottom: #ff5858;
}

nav .menu-item a{
    color:inherit;
    text-decoration: none;
    font-family: 'Roboto';
    src: './fonts/Roboto-LightItalic.ttf';
}


</style>
<style type="scss">
.searchbox{
    width: 100px;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    outline: none;
    transition: width 0.4s;
    -webkit-transition: width 0.4s;
}
    :focus {
        width: px;
        background-color: rgba(0, 0, 0, 0);
        background: linear-gradient(#FFF, #FFF) center bottom 2px /calc(100% - 10px) 1px no-repeat;
        color: white;}
        :placeholder {
            color: rgba(0, 0, 0, 0);
        }
    
    ::placeholder {
        color: white;
    }
    
</style>