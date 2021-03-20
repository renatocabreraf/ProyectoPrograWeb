<template>
    <div>   
      <form v-on:submit.prevent="onSubmit">
        <div class="mb-4">
          <label class="block text-grey-darkest text-sm font-bold mb-2" for="name">Name</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" v-model="user.name">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darkest text-sm font-bold mb-2" for="lastname">Lastname</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Lastname" v-model="user.lastname">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darkest text-sm font-bold mb-2" for="lastname">Age</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Age" v-model="user.age">
        </div>
        <div class="text-center">
            <button type="submit" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
        </div>
      </form>
    </div>
</template>
 
<script>
import {db} from '../firebaseDb';
 
export default {
  data() {
    return {
      users: {},
      user: {
        name: '',
        lastname: '',
        age: '',
      }
    }
  },
 
  firebase: {
    users: {
      source: db.ref('users'),
      asObject: true
    }
  },
 
  created() {
    let user = this.users[this.$route.params.id]
    this.user = {
      name: user.name,
      lastname: user.lastname,
      age: user.age,
    }
  },
 
  methods: {
    onSubmit() {
      this.$firebaseRefs.users.child(this.$route.params.id).set(this.user)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>