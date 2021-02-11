<template>
  <header>
    <Nevbar />
  </header> 

</template>

<script>
import Nevbar from './components/Nevbar';

export default {
  name: 'App',
  components: {
    Nevbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
header {
  width: 100vw;
  background-image: url('./nevbarMetal.jpg');
  padding: 30px;
}

body, html{
  background: black;
  color: wheat;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
}
.info-titulo{
  font-size: 70px;
  text-transform: uppercase;
  margin: 0;
}
.info-sub{
  font-size: 45px;
  text-transform: uppercase;
  margin: 0;
}
.info-image{
  background-image: url('./infoIMG.jpg');
  -webkit-backdrop-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  filter: blur(5px);
}
.info-page{
  position: absolute;
  top: 50%;
  left: 50;
  transform: translate(-50%, -50%);
  z-index: 45%;
  width: 45%;
  padding: 40px 0;
  text-align: center;
  border-top-left-radius: 70px;
  border-bottom-right-radius: 70%;
  background-color: rgba(0,0,0,0.3);
  color: #fff;
  font-weight: bold;
  border: 10px inset #fff;

}
.info-page{
  padding: 0 85%;
  font-family: 'Roboto';
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

</style>
