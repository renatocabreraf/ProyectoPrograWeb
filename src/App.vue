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

.video-title{
  height: 1px;
  font-size: 35px;
  padding: 80px;
  text-transform: uppercase;
  margin: 0;
  font-style: italic;
  font-weight: bold;
  -webkit-text-stroke: 2px rgb(255, 144, 16);
}

.video-p{
  padding: 5px;
  text-align: center;
  color: #fff;
  font-weight: bold;
}

.footer-basic {
  padding:40px 0;
  background-color:#ffffff;
  color:#4b4c4d;
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
  border:5px solid #ccc;
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
  color:#aaa;
  margin-bottom:0;
}

</style>
