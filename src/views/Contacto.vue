<template>
<div id="contact-form" class="contact-form">
		<h1 class="contact-form_title">Contact Form</h1>
		<div class="separator"></div>

		<div v-if="isSending" class="loading">Sendig...</div>

		<form class="form" @submit="onSubmit">
			<input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
			<input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
			<textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
		   <button class="button">Send</button>
		</form>
        <Footer />
	</div>

</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
 components:{
      Footer,
    }
  }
</script>

<style>

</style>