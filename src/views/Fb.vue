<template>
  <div class = "fb">
    <button class="button" @click="logInWithFacebook"> Login with Facebook</button>
    <router-link to="/">Volver</router-link>
  </div>

</template>
<script>

  h1= title

  if(user){
    ul
      li
        img(src="#{user.photo}")
      li
        <a(href='logout')> Salir
  }else
    ul
      li
        <a(href='auth/facebook')> LoginConFacebook
export default {
  name:"facebookLogin",
  methods: {
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.login(function(response) {
        if (response.authResponse) {
          alert("You are logged in &amp; cookie set!");
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "8220179XXXXXXXXX",
          cookie: true,
          version: "v13.0"
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
};

</script>

<style>
.button{
  color:white;
  min-width: 150px;
  background-color: #000000a1;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
</style>