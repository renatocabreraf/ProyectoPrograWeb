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

</style>
