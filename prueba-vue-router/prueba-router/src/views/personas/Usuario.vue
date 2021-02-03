<template lang="pug">

.contenedor(v-if="persona")
    p Usuario: {{ persona.username }}
    p Nombre: {{ persona.name }}
    p e-mail: {{ persona.email }}

div(v-else)
    h3 Cargando datos...

</template>


<script>
export default {

    props: ['num'], 

    data() {
        return {
            persona: null
        }
    },

    mounted() {
        fetch('https://jsonplaceholder.typicode.com/users/'+this.num)
            .then( respuesta => respuesta.json() )
            .then( data => this.persona = data )
            .catch( error => console.log(error.message))
    }

    
    // Para routear a cada usuario el método data() no es necesario
    // porque el componente toma este dato en los props
    // que le vienen de params en el router-link en Usuarios.vue
    // bajo el nombre "num", que es el número de id del usuario.

    /* data() {
        return {
            id: this.$route.params.num
        }
    } */
    
}
</script>


