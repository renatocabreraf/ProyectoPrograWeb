<template>
<div>
<hr color="black" size = 1 width="100%">
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
             <br><br><br><br><br><br>
             <p> Selecciona una Colección ...</p>
        <br><br><input type="text" class="form-control" placeholder="Busca por Nombre"
          v-model="title"/>
           
        <div class="input-group-append">
     <br><br>
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de Colecciones</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remover Todo
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>Colecciones</h4>
        <div>
          <label><strong>Nombre</strong></label> {{ currentTutorial.title }}
        </div>
        <div>
          <label><strong>URL de la Coleccion</strong></label> {{ currentTutorial.description }}
        </div>
        <div>
          <label><strong>Estatus:</strong></label> {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>

        <router-link :to="'/tutorials/' + currentTutorial.id" class="badge badge-warning">Editar</router-link>
      </div>
      <div v-else>
        <br />
        
      </div>
    </div>
   
  </div>
</div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [(renato)],
      currentTutorial: null,
      currentIndex: -1,
      title: "renato"
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

.btn-outline-secondary, .btn-danger{
   width: 100%;
    background-color: black;
}
</style>
