<template>
<div>
           <Navbar />
    <div id="cuerpo">
 
        <AddTutorial />
        <div class="row col-12 my-3">
            <div class="col-1">
                <div class="friend"></div>
            </div>
            <div class="col-11">
                <b-link class="my-2" style="float: left;">{{model.name}}</b-link>
                <button class="post-icon" style="border: none; float: right;">
                    <span class="iconify" data-inline="false" data-icon="pixelarticons:more-horizontal" style="font-size: 39px;"></span>
                </button>
            </div>
        </div>
        <div class="container">
            <b-img :src="getImageUrl()"></b-img>
        </div>
        <div class="container my-3">

        </div>
    </div>
        <Footer />
    </div>
</template>

<script>

import AddTutorial from '../components/AddTutorial.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
    export default {
        data() {
            return {
                model: {
                    name: 'Renato Cabrera',
                    imgsrc: 'https://cdn2.atraccion360.com/media/aa/styles/xlarge/public/images/2016/11/million-dollar-hot-wheels-collection-01.jpg'
                },
                
            }
        },
        methods: {
            getImageUrl(){
                const {imgsrc} = this.model
                return `${imgsrc}`
            }
        },
    components:{
      AddTutorial,
      Navbar,
      Footer
    }
        
    }
    
</script>

<style>

</style>