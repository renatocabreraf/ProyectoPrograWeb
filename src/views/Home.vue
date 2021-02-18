<template>
  <div class="home">
    <Slider />
    <HelloWorld msg="¡Bienvenido Coleccionista!"/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'
export default {
  data(){
        return {
            index : 0,
            slideDirection: '',
            slides: [
                'https://i.ibb.co/rM72969/CCMix1.jpg',
                'https://i.ibb.co/dJFpdLY/BMix1.jpg',
                'https://i.ibb.co/QNQ2GVw/Retro-Mix12021.jpg',
                'https://i.ibb.co/Nn7CvTy/2021set.jpg',
                
            ]
        }
         },
    computed: {
        slidesLength() {
            return this.slides.length;
        },
        visible() {
            return this.index === this.$parent.index;
        },
        dir() {
            console.log(this.$parent.slideDirection)
            return this.$parent.slideDirection;
        },
    },
    mounted(){
        this.slides = this.$children;
        this.slides.map( (slide,index) => {
            slide.index = index;
        });
    },
    methods: {
        next(){
            this.index++;
            if(this.index >= this.slidesLength){
                this.index = 0;
            }
            this.slideDirection = 'slide-right';
        },
        prev(){
            this.index--;
            if(this.index < 0){
                this.index = this.slidesLength - 1;
            }
             this.slideDirection = 'slide-left';
        },
        checkSlide(event){
            if(event.keyCode === 39){
                this.next();
            }else if (event.keyCode === 37){
                this.prev();
            }else {
                return;
            }
        },
    },
  components: {
    HelloWorld,
    Slider,
    Footer,
  }
}
</script>
