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
            <button type="submit" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>
        </div>
      </form>
<table class="mt-5">
  <thead>
    <tr class="border-solid border-b">
      <th>ID</th>
      <th>Name</th>
      <th>Lastname</th>
      <th>Age</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users"  v-bind:key="user['.key']">
      <td class="px-3">{{user['.key']}}</td>
      <td class="px-3">{{user.name}}</td>
      <td class="px-3">{{user.lastname}}</td>
      <td class="px-3">{{user.age}}</td>
      <td class="px-3">
          <router-link :to="{ name:'edit', params: { id:user['.key'] } }" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded normal-case text-xs">Edit</router-link>
      <button class="ml-3 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded text-xs" v-on:click="deleteUser(user)">
    Delete
</button>
      </td>
      
    </tr>
  </tbody>
</table>
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
    users: db.ref('users')
  },
 
  methods: {
    onSubmit() {
        this.$firebaseRefs.users.push(this.user)
        this.user = {
            name: '',
            lastname: '',
            age: ''
        }
    },
    deleteUser(user) {
        this.$firebaseRefs.users.child(user['.key']).remove()
    }
  }
  
}
</script>