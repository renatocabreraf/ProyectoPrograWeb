<template>
    <div class="slider">
        <carousel >
            <a href="#"><carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide></a>
        </carousel>
    </div>    
</template>

<script>
import Carousel from './components/Carousel.vue';
import CarouselSlide from './components/CarouselSlide';
export default {
    data(){
        return {
            slides: [
                'https://i.ibb.co/rM72969/CCMix1.jpg',
                'https://i.ibb.co/dJFpdLY/BMix1.jpg',
                'https://i.ibb.co/QNQ2GVw/Retro-Mix12021.jpg',
                'https://i.ibb.co/Nn7CvTy/2021set.jpg',
                
            ]
        }
    },
    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    }
}
</script>

<style>
    .slider {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:1800px;
        height:400px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(255, 255, 255, 0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }

    
</style>