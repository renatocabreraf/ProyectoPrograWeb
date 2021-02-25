<template>
<div>
<hr color="black" size = 1 width="100%">
  <div class="submit-form text-center">
    
      
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Nombre del Coleccionista</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">URL de Colección</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>
   <br>   <br>
      <button @click="saveTutorial" class=" btn-success form-group">Subir</button><br>
      <button class="btn-danger form-group" @click="removeAllTutorials">
        Remover
      </button><br>
      <button @click="saveTutorial" class=" btn-success form-group">Editar</button>
      <br>
      
      
    </div>
   
    <div v-else>
      
      <h4>¡Envío Exitoso!</h4>
      <button class="btn btn-success" @click="newTutorial">Agregar</button>
    </div>
  </div>
  <br><br>
   <hr color="black" size = 1 width="100%">
</div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      };

      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
html{
  background-color: white;
}
.submit-form {
  max-width: 300px;
  margin: auto;
  color: black;
}

.btn-success{
    width: 100px;
    background-color: black;
}

.form-group{
  text-align: center;
}

hr{
  width: 100%;
  text-align: center;
}
</style>
