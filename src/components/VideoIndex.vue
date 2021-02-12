<template>
    <div class="video-p">
      <h1 class="video-title">Videos de canales destacados</h1>
      <iframe class = "video1" width="560" height="315" src="https://www.youtube.com/embed/tldMm_ZUsFs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe class = "video2" width="560" height="315" src="https://www.youtube.com/embed/LjYvlSvsCQM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: 'VideoIndex'
}
</script>

<style>
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
</style>