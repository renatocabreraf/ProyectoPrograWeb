<template>
    <div>
        <b-container class="empty">
        </b-container>
        <b-container>
            <div class="row align-items-center">
                <b-col class="col-md-6 col-12 text-center">
                    <img id ="imagen" alt="logo"  src="../assets/Logo2.png" />
                </b-col>
                <b-col class="col-md-6 col-12 text-center">
                    <b-card-body class="square-card">                    
                        <b-form role="form" @submit.prevent="onSubmit()">
                                                   
                            <b-form-input alternative
                                class="mb-3 custom-input font-general"
                                name="Email"
                                :rules="{required: true, email: true}"
                                prepend-icon="ni ni-lock-circle-open"
                                placeholder="email"
                                v-model="model.email">
                            </b-form-input>
                            <b-form-input alternative
                                class="mb-3 custom-input font-general"
                                name="Password"
                                :rules="{required: true, min: 6}"
                                prepend-icon="ni ni-lock-circle-open"
                                type="password"
                                placeholder="password"
                                v-model="model.pass">
                            </b-form-input>
                            

                            <b-form-checkbox style="margin-left: 1.3rem" v-model="model.rememberMe" class="terms"><br>Accept our terms and conditions</b-form-checkbox>

                            
                                <b-button type="submit" class="font-general-button " block variant="primary">Log In</b-button>
                            
                        </b-form>

                    </b-card-body>
                </b-col>
            </div>
        </b-container>
    </div>
</template>

<script>
import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
Vue.use(VueAxios, axios)
    export default {
        computed: {
            state() {
                return this.model.email.length >= 4
            },
            invalidFeedback() {
                if (this.model.email.length > 0) {
                    return 'Enter at least 4 characters.'
                }
                return 'T'
            }
        },
        data() {
            return {
                model: {
                    name: '',
                    lastName: '',
                    email: '',
                    pass: '',
                    birthDate: '',
                    acceptTermsAndConditions: false
                }
            }
        },
        methods: {
            async onSubmit() {
            try{
                await Vue.axios.post('https://3jj8438o79.execute-api.us-east-2.amazonaws.com/test/auth', this.model)
                .then((response) =>{
                    console.log(response)
                    if(response.status == 200){
                        this.$router.push("/home");
                    }else{
                        this.loginerror = true;
                    }
                })
            }catch(err){
                console.error(err);
                this.loginerror = true;
            }
            }
        }
    }
</script>

<style>
#imagen{
    background-color: white;
}
body{
    background-color: white;
}
.font-general-button{
    width: 50%;
    background-color: rgb(0, 0, 0);
        background-color: blue;
}
.terms{
    color: rgb(12, 12, 12);

}
</style>