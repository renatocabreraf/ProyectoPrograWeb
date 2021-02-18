<template>
    <div class="footer-basic">
      <footer>
          <div class="social"><a href="https://www.instagram.com/renatocabrera_/?hl=es"><i class="icon ion-social-instagram"></i></a>
            <a href="https://www.snapchat.com/add/renatocabreraf"><i class="icon ion-social-snapchat"></i></a>
            <a href="https://www.twitter.com/renatocabreraf"><i class="icon ion-social-twitter"></i></a>
            <a href="https://www.facebook.com/renatocabrera98"><i class="icon ion-social-facebook"></i></a></div>
          <ul class="list-inline">
              <li class="list-inline-item" ><router-link to="/">Inicio</router-link></li>
              <li class="list-inline-item"><router-link to="/contact">Contáctanos</router-link></li>
              <li class="list-inline-item"><router-link to="/about">Sobre Nosotros</router-link></li>
              <li class="list-inline-item"><router-link to="/terms">Terminos y condiciones</router-link></li>
              <li class="list-inline-item"><router-link to="/priv">Políticas de Privacidad</router-link></li>
          </ul>
          <p class="copyright">Renato Cabrera © 2021</p>
      </footer>
      <router-view/>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.footer-basic {
  padding:40px 0;
  background-color:#333232;

  color:#ffffff;
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:25px;
}

.footer-basic .social > a {
  font-size:24px;
  width:40px;
  height:px;
  line-height:50px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:5px solid rgb(255, 255, 255);
  margin:0 8px;
  color:inherit;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:rgb(255, 255, 255);
  margin-bottom:0;
}
</style>