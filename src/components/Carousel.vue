<template>
    <div class="carousel">
      <slot></slot>
      <button @click = "next" class="next">Siguiente</button>
      <button @click = "prev" class="prev">Anterior</button>

    </div>
</template>

<script>
export default {
    data(){
        return{


        }
    },
    methods : {
        next() {
            this.$emit('next')
        },
        prev() {
            this.$emit('prev')
        }
    }
}
</script>

<style>
    .carousel{
        position: relative;
        width: 600px;
        height: 350px;
        overflow: hidden;
    }
    button{
        position: relative;
        height: 40px;
        width: 50px;
        top: calc(50% - 20px);
        background-color: black;
        border: none;
    }
</style>