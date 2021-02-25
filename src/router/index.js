import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/terms',
    name: 'Terminos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Terminos.vue')
  },
  {
    path: '/contact',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '/priv',
    name: 'Politicas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Politicas.vue')
  },
  {
    path: '/historia',
    name: 'Historia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Historia.vue')
  },
  {
    path: '/tipos',
    name: 'Tipo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tipo.vue')
  },
  {
    path: "/coleccion",
    name: "Coleccion",
    component: () => import("../views/Coleccion.vue")
  },
  {
    path: "/piezas",
    name: "Piezas",
    component: () => import("../views/Piezas.vue")
  },
  {
    path: "/mercado",
    name: "Mercado",
    component: () => import("../views/Mercado.vue")
  },
  {
    path: "/",
    name: "SignUp",
    component: () => import("../components/SignUp.vue")
  },
  {
    path: "/tutorials",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("../components/TutorialsList")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("../components/Tutorial")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddTutorial")
  }
  ,
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import("../views/Contacto.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

$(document).ready(function(){
	setup();
});


function setup(){
	
	var $passage = $('#weirdtext');
	
	//get the inner HTML of the #weirdtext paragraph
	var rawtxt = $passage.html();
	
	//Get the length of the string for use in loop
	var len = rawtxt.length;
	
	//empty string used to store final text that includes spans
	var newtext = '';

	
	//For each character inside #weirdtext string (this is why we got length)
	for(var i = 0; i < len; i ++){
		
		//get a random num between 1 and 5
		var rng = Math.floor(Math.random() * 5) + 1;
		
		//get the i-th character from the string
		var currentchar = rawtxt.charAt(i);
		if(currentchar == ' '){
			//if it's a space, add an empty .space span
			var newchar = '<span class="space"></span>';
		}
		else{
			//otherwise, wrap it with a span, and give it class effectN, where N is a random int as before
			var newchar = '<span class="effect' + rng + '">' + currentchar + '</span>';
		}
		//add this new "char" (actually it's a char with spans wrapping it) to the empty string
		newtext = newtext + newchar;
	}
	
	//replace #weirdtext paragraphs inner HTML with the newly created string
	$passage.html(newtext);
	
}





export default router
