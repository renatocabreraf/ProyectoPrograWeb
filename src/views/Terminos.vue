<template>
<div class="terms">
  <Navbar />
    <h1 id="titulo">Términos y Condiciones</h1>
    <div class="imagen">
    <img  src="../assets/Logo2.png"><img src="https://1000marcas.net/wp-content/uploads/2020/11/Hot-Wheels-Logo.png" width="370px" height="200px"><img src="https://hotwheelscollectors.mattel.com/wcsstore/MattelSAS/images/colors/hwc/logo.png">
    </div>  
<p id="cuerpo"> El sitio web (definido a continuación) es proporcionado por Renato Cabrera como proyecto de la asignatura Programación Web. Estos "Términos y condiciones de uso del sitio web" (este "Acuerdo de usuario") rigen el uso del sitio web, independientemente de cómo acceda o utilice. Por "Sitio web", nos referimos a la dirección de dominio de Internet dentro de la cual se publica este Acuerdo de usuario y todas las funciones, aplicaciones, contenido y descargas que operamos y que están disponibles a través de él o interactúan con él y / o publican enlaces a este. Acuerdo del Usuario.

SI USTED ES MENOR DE LA MAYORÍA DE EDAD (que es de 18 años en la mayoría de los estados), su padre o tutor puede ser responsable de algunas o todas sus actividades en el sitio web. Debido a esto, y debido a que es prudente que sus padres o tutores estén al tanto de sus actividades, incluidos los sitios web que visita, debe informar a sus padres o tutores que está utilizando el sitio web, ya que este Acuerdo de usuario y su uso de el sitio web afecta sus derechos y obligaciones legales.
<br>
SI DESEA UTILIZAR ESTE SITIO WEB, lea atentamente este Acuerdo de usuario, ya que constituye un acuerdo escrito entre usted y el Equipo de Desarrollo y afecta sus derechos y obligaciones legales.
<br>
Cada vez que accede y / o utiliza el sitio web (que no sea simplemente para leer este Acuerdo de usuario), acepta estar sujeto y cumplir con todos los términos de este Acuerdo de usuario y los Términos adicionales (definidos a continuación). Por lo tanto, no utilice el sitio web si no está de acuerdo con todos los términos de este Acuerdo de usuario y los Términos adicionales.
<br>
Las realidades comerciales asociadas con la operación del sitio web son tales que, sin las limitaciones que se establecen en este Acuerdo de usuario, como sus concesiones y renuncias de derechos, las limitaciones de nuestra responsabilidad, su indemnización por nosotros y nuestro arbitraje de ciertos disputas: Mattel no pondrá el sitio web a su disposición.
<br>
Resumen de términos clave:
Es importante que lea este Acuerdo de usuario completo; pero, estos son algunos de los términos más importantes que queremos llamar su atención:
Cada vez que utiliza el sitio web, este Acuerdo de usuario se aplica a su uso. Cualquier actualización se aplicará a usted; por lo que debe consultar con frecuencia para ver si hay actualizaciones.
       </p>
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
body,html{
    background-color: white;
}

.imagen{
  text-align: center;

}

#cuerpo{
  display: block;
  margin: 20px auto;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: left;
  max-width: 50%;
}
</style>