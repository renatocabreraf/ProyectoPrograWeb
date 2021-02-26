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
                        <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                            <b-form-input alternative
                                class="my-3  custom-input-2 font-general "
                                name="Name"
                                :rules="{required: true}"
                                :invalid-feedback="invalidFeedback"
                                prepend-icon="ni ni-email-83"
                                placeholder="name"
                                v-model="model.name"
                                >
                            </b-form-input>
                            <b-form-input alternative
                                class="my-3  custom-input-2 font-general "
                                name="Lastname"
                                :rules="{required: true}"
                                prepend-icon="ni ni-lock-circle-open"
                                placeholder="last name"
                                v-model="model.password"
                                >
                            </b-form-input>
                            
                            <b-form-input alternative
                                class="mb-3 custom-input font-general"
                                name="Email"
                                :rules="{required: true, email: true}"
                                prepend-icon="ni ni-lock-circle-open"
                                placeholder="email"
                                v-model="model.password">
                            </b-form-input>
                            <b-form-input alternative
                                class="mb-3 custom-input font-general"
                                name="Password"
                                :rules="{required: true, min: 6}"
                                prepend-icon="ni ni-lock-circle-open"
                                type="password"
                                placeholder="password"
                                v-model="model.password">
                            </b-form-input>
                            <b-form-input
                                class="mb-3 custom-input font-general"
                                name="BirthDate"
                                type="date"
                                v-model="model.birthDate">

                            </b-form-input>

                            <b-form-checkbox style="margin-left: 1.3rem" v-model="model.rememberMe" class="terms"><br>Accept our terms and conditions</b-form-checkbox>

                            <router-link to="/home">
                            <br><br><br>
                                <b-button class="font-general-button " block variant="primary">Sign In</b-button>
                            </router-link>
                        </b-form>

                    </b-card-body>
                </b-col>
            </div>
        </b-container>
    </div>
</template>

<script>
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
                    password: '',
                    birthDate: '',
                    acceptTermsAndConditions: false
                }
            }
        },
        methods: {
            onSubmit() {
            // this will be called only after form is valid. You can do api call here to login
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