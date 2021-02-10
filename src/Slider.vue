<template>
    <div class="slider">
      <carousel
        @next="next"
        @prev="prev"
      
      >
        <carousel-slide v-for ="(slide,index) in slides" 
            :key="slide" 
            :index="index"
            :visibleSlide="visibleSlide"
            >
            <img :src = "slide" />
        </carousel-slide>
      </carousel>
    </div>
</template>

<script>
import Carousel from './components/Carousel';
import CarouselSlide from './components/CarouselSlide'
export default {
    data(){
        return{
            slides: [
                'https://picsum.photos/id/237/200/300',
                'https://picsum.photos/id/236/200/300',
                'https://picsum.photos/id/235/200/300',
                'https://picsum.photos/id/234/200/300',
                'https://picsum.photos/id/233/200/300',
                'https://picsum.photos/id/232/200/300'

            ],
            visibleSlide : 0,

        }
    },
    computed: {
        slidesLen(){
            return this.slides.length
        }
    },
    methods: {
        next() {
            if(this.visibleSlide >= this.slidesLen - 1){
                this.visibleSlide = 0;
            }else{
                this.visibleSlide++;
            }
        },
        prev() {
            if(this.visibleSlide <= 0){
                this.visibleSlide = this.slidesLen - 1;
            }else{
                this.visibleSlide--;
            }
        }
    },
    components : {
        Carousel,
        CarouselSlide,
    }
}
</script>

<style>
    .slider{
        display: flex;
        justify-content: center;
    }
</style>