<template>
  <div class="hello">
    <div class="info-page">
    <h1 class="info-titulo">{{ msg }}</h1>
    <p>
       En este espacio podrás conectarte con miles de coleccionistas dispuestos a compartir experiencias
        dentro del coleccionismo. Perosnas de todas las edades se congregan con un sólo propósito: Los Hot Wheels.
        En esta página podrás descubrir la historia de Hot Wheels, enterarte de las últimas noticias y lanzamientos, compartir tu colección y
        comprar, vender y subastar piezas, ¿qué esperas? ¡únete ya!. 
     <router-link to="/priv" class="info-ref">Contacta con nosotros</router-link>
    </p>
    </div>
    <div class="video-p">
    <h1 class="video-title">Videos de canales destacados</h1>
    <iframe class = "video1" width="560" height="315" src="https://www.youtube.com/embed/tldMm_ZUsFs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe class = "video2" width="560" height="315" src="https://www.youtube.com/embed/LjYvlSvsCQM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  body,html{
    background-color: black;
  }

 .info-titulo{
  font-size: 55px;
  padding: 15px;
  text-transform: uppercase;
  margin: 0;
  font-style: italic;
  font-weight: bold;
  -webkit-text-stroke: 2px rgb(219, 3, 3);
}

.info-page{
  text-align: center;
  color: #fff;
  font-weight: bold;
  background-color: black;
  padding-left: 70px;
  padding-right: 70px;

}

.video-title{  
  font-size: 35px;
  padding: 25px;
  text-transform: uppercase;
  margin: 0;
  font-style: italic;
  font-weight: bold;
  -webkit-text-stroke: 2px rgb(255, 144, 16);
}

.video-p{
  padding: 10px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  background-color: black;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
