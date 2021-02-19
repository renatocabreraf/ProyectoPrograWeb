<template>
<div class="coleccion">
    <h1> Notes </h1> <button @click="createNote"
    class="create-new-button">Crear nueva</button>
        <div class="notes">
            <nav>
                <p v-if="!notes.length">Ninguna coleccion guardada</p>
                <ul v-if="notes.length">
                    <li v-for="note in notes">
                        <button @click="currentColeccion = note"
                        :class="{active: note === currentColeccion}">
                        {{note.title}}</button>
                    </li>
                </ul>
            </nav>
        </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>