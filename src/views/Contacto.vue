<template>
<div class="cuerpo">
  <Navbar />
  <br>
  <h1 class="encabezado">     Contáctanos</h1>
  <div class="contacto">
    <div class="form">
     <v-layout>
      <v-flex xs12 sm8 offset-sm2  >
        <v-card >
          <v-container grid-list-sm fluid >
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="from_name"
                :rules="from_nameRules"
                label="Nombre"
                required
        
              ></v-text-field>
              <v-text-field
                v-model="from_email"
                :rules="from_emailRules"
                label="E-mail"
                hint="Escriba su dirección de correo electrónico que pronto lo contactaremos"
                required
              ></v-text-field>
              <v-text-field
                v-model="subject"
                :rules="subjectRules"
                label="Asunto"
                required
              ></v-text-field>
              <v-textarea
                v-model="message"
                :rules="messageRules"
                label="Comentario"
                value=""
                hint="Escribanos algo"
                required
              ></v-textarea>
              <v-alert
                :value="alert"
                v-model="alert"
                type="success"
                dismissible
                transition="scale-transition"
              >
                El correo se ha enviado con éxito
              </v-alert>
              <v-btn
                :disabled="!valid"
                :loading="loading"
                @click="submit"
                @click.native="loader = 'loading'"
              >
                enviar
              </v-btn>
              <v-btn @click="clear">limpiar</v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
      </v-layout>
    </div>
    
  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="f">
    <Footer />
    </div>
</div>
</template>

<script>
let emailjs = require('emailjs-com')
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: "contactenos",

  data: () => ({
    valid: true,
    from_name: "",
    from_nameRules: [
      v => !!v || "Completar el nombre es obligatorio",
      v => (v && v.length > 3) || "El nombre debe ser mayor a tres caracteres"
    ],
    from_email: "",
    from_emailRules: [
      v => !!v || "Complete el E-mail por favor",
      v => /.+@.+/.test(v) || "E-mail es un campo obligatorio"
    ],
    subject: "",
    subjectRules: [
      v => !!v || "Complete el campo Asunto",
      v => (v && v.length > 3) || "Asunto es un campo obligatorio"
    ],
    message: "",
    messageRules: [v => !!v || "Complete el E-mail por favor"],
    alert: false,
    loader: null,
    loading: false,
  }),
  
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      this.alert = true
      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  
  created(){
    emailjs.init("user_ZPS9WMVNAPWLC8dMp7RkH");
  },

  methods: {
    submit() {
      let data = {
        from_name: this.from_name,
        from_email: this.from_email,
        message: this.message,
        subject: this.subject
      };

      if (this.$refs.form.validate()) {
        console.log("hola me estan por enviar");
        emailjs.send("service_izjq7l8", "template_axu29qm", data).then(
          function(Response) {
            if (Response.text === "OK") {
              //alert("El correo se ha enviado con éxito");
            }
            console.log(
              "SUCCESS. status=%d, text=%s",
              Response.status,
              Response.text
            );
          },
          function(err) {
            alert("Ocurrio un problema al enviar  el correo");
            console.log("FAILDED. error=", err);
          },
          this.$refs.form.reset()
        );
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  },
  
    components:{
      Navbar,
      Footer
    }
};
</script>

<style>
.contacto{
  width: 100%;
  left: 15%;           
position: absolute;
text-align: center;

}
.form{
  text-align: center;
  width: 100%;
  display: block;


}

.encabezado{
  
  font-size: 35px;
  text-align: center;
  text-transform: uppercase;

  font-style: italic;
  font-weight: bold;
  -webkit-text-stroke: 2px rgb(87, 2, 2);
  color:rgb(255, 174, 0);

}

.cuerpo{
  background-image: url('https://cdn.vox-cdn.com/thumbor/uOqQsNihzIApfLdv14bGfnKf_jc=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19934778/JeremyIglesias1.jpeg');
  background-size: 100%;
}

</style>