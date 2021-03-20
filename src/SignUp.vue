<template>
  <div class="home">
    <sign-up/>
  </div>
</template>

<script lang="js">
import { Component, Vue } from "vue-property-decorator";
import SignUp from "@/components/SignUp.vue";

@Component({
  components: {
    SignUp
  }
})
export default class Home extends Vue {}
</script>

 var firebaseConfig = {
    apiKey: "AIzaSyCrGEKow6Bq1v6WNIDK0ZUSsk536DfWOm4",
    authDomain: "hwc-firstbase.firebaseapp.com",
    projectId: "hwc-firstbase",
    storageBucket: "hwc-firstbase.appspot.com",
    messagingSenderId: "787921856577",
    appId: "1:787921856577:web:8e39fe3672ea80892bbec0",
    measurementId: "G-FQNYTK1BJV"
  }; 
