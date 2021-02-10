<template>
    <nav>
       <div class="logo-nav"><a href="#"><img src="./Logo2.png"></a></div>
       <div class="menu-item"><a href="#">Historia de Hot Wheels</a></div>
       <Dropdown title="Tipos de Piezas" :items="tipos"/>
       <div class="menu-item"><a href="#">Colección de Usuarios</a></div>
       <div class="menu-item"><a href="#">Piezas a Buscar</a></div>
       <div class="menu-item"><a href="#">Mercado Online</a></div> 
    </nav>    
</template>

<script>
import Dropdown from './Dropdown';

export default {
    name: 'nevbar',
    components: { Dropdown },
    data(){
        return{
            tipos: [
                {
                    title: 'Piezas Básicas',
                    link: '#'
                },
                {
                    title: 'Treasure Hunt y Super Treasure Hunt',
                    link: '#'
                },
                {
                    title: 'Series Especiales de Piezas Básicas',
                    link: '#'
                },
                {
                    title: 'Character y Spaceships',
                    link: '#'
                },
                {
                    title: 'Retro Entertainment',
                    link: '#'
                },
                {
                    title: 'Premium',
                    link: '#'
                },
                {
                    title: 'RLC y Ediciones Especiales',
                    link: '#'
                }
            ]
        }
    }
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