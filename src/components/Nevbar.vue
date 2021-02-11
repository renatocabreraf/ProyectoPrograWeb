<template>
    <nav>
       <div class="logo-nav"><a href="#"><img src="./Logo2.png"></a></div>
       <div class="menu-item"><a href="#">Historia de Hot Wheels</a></div>
       <div class="menu-item"><a href="#">Tipo de Piezas</a></div>
       <div class="menu-item"><a href="#">Colección de Usuarios</a></div>
       <div class="menu-item"><a href="#">Piezas a Buscar</a></div>
       <div class="menu-item"><a href="#">Mercado Online</a></div> 
    </nav>    
</template>

<script>


export default {
    name: 'nevbar',
    
        
    }

</script>

<style>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
    
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