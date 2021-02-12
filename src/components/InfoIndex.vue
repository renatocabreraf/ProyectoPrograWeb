<template>
     <div class="info-page">
      <h1 class="info-titulo"><span>¡Bienvenido Coleccionista!</span></h1>
      <p>
        En este espacio podrás conectarte con miles de coleccionistas dispuestos a compartir experiencias
        dentro del coleccionismo. Perosnas de todas las edades se congregan con un sólo propósito: Los Hot Wheels.
        En esta página podrás descubrir la historia de Hot Wheels, enterarte de las últimas noticias y lanzamientos, compartir tu colección y
        comprar, vender y subastar piezas, ¿qué esperas? ¡únete ya!. 
      </p>
      <a class="info-ref" href="#">Contacta con nosotros</a>
    </div>
    
</template>

<script>
export default {
    name: 'InfoIndex',
}
</script>

<style>
    .info-titulo{
  font-size: 80px;
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
}

.info-ref{
  display: inline-block;
  padding: 1px 50px;
  border: 2px solid #fff;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  margin-top: 15px;
}

.info-ref.active,
.info-ref:hover{

    background-color: #444;
    border-bottom: #ff5858;
}
</style>