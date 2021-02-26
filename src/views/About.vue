<template>

    <div class="about">
      <Navbar />
       <p id="weirdtext">Esta página web está dedicada a todos los coleccionistas de piezas Hot Wheels (también aceptamos otras marcas) y disfruten
        de la pasión que rodea el coleccionismo, con el fin de compartir historias, anécdotas, colecciones y también conocer a 
        otros coleccionstas, para realizar intercambios, ventas y subastas de piezas. Actualmente esta página está dedicada a todos
        los coleccionistas guatemaltecos.
        <br><br>
        Recuerda mantener un clima de amistad y camaradería, todos en este portal buscamos compartir nuestra colección, intercambiar piezas y comprar todas las
        que nos hacen falta. De encontrarse comentarios que dañen la integridad de este sitio, se procederá a banear a la persona y no permitirle el ingreso a la 
        página por el tiempo que sea debido según los <br><a href="/terms">Terminos y condiciones</a>
        <br><br>
        Atentamente: <br>
        </p> <author>Equipo de Desarrollo</author>
        <Footer />
    </div>

</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
export default {
 components:{
      Footer,
      Navbar,
    }
  }
</script>

<style>

.about{
  background-image: url(https://lh3.googleusercontent.com/proxy/3Zaly7bHnjjUGcf8oM8fP6A7w3vhKzg4ycXxOnvozr4HNNz03I5aldu_-xroWA0KU0tWmoFwI6YN0vi2ftm_t9uYUpue1eyJ-i9SYCQLCv9R0lwC-L5pn1WRGFTj);
  

}

#weirdtext{
	max-width: 500px;
	display: block;
	margin: 100px auto 20px auto;
  color: black;
  background-color: rgba(83, 2, 2, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;

}

/*Just the CSS for the quote citation*/
author{
	max-width: 500px;
	display: block;
	margin: 0 auto;
	text-align: right;
  color: black;
  
  
}

/*all spans have to be block or inline block to transform*/
#weirdtext span{
	display: inline-block;
   
}

/*When JS finds a space, it replaces it with a span with .space class*/
/*I did this so you can do stuff with the spaces if you want.*/
.space{
	width: 15px;
}


/*These classes are added to each letter/span using JS so they animate*/
.effect1{
	animation: zoom 6s linear infinite;
	-webkit-animation: zoom 6s linear infinite;
}
.effect2{
	animation: bounce 3s linear infinite;
	-webkit-animation: bounce 3s linear infinite;
}
.effect3{
	animation: squash 2s linear infinite;
	-webkit-animation: squash 2s linear infinite;	
}
.effect4{
	animation: rot 5s linear infinite;
	-webkit-animation: rot 5s linear infinite;
}
.effect5{
	animation: fade2 4s linear infinite;
	-webkit-animation: fade2 4s linear infinite;
}


</style>
