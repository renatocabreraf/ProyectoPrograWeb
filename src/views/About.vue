<template>

    <div class="about">
       <p id="weirdtext">Esta página web está dedicada a todos los coleccionistas de piezas Hot Wheels (también aceptamos otras marcas) y disfruten
        de la pasión que rodea el coleccionismo, con el fin de compartir historias, anécdotas, colecciones y también conocer a 
        otros coleccionstas, para realizar intercambios, ventas y subastas de piezas. Actualmente esta página está dedicada a todos
        los coleccionistas guatemaltecos.</p> <author>Equipo de Desarrollo</author>
        <Footer />
    </div>

</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
 components:{
      Footer,
    }
  }
</script>

<style>

.about{
  background-image: url(https://i.imgur.com/fnyPU9Q.jpg);
  

}

#weirdtext{
	max-width: 500px;
	display: block;
	margin: 100px auto 20px auto;
  color: black;
  background-color: rgba(255, 255, 255, 0.3);
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
