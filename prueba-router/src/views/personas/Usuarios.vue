<template lang="pug">
  
.contenedor  
  h1 Usuarios:
  
  // El name le indica al router qué componente tiene que linkear
  // en el archivo router/index.js
  // en este caso es el componente Usuario del archivo Usuario.vue
  // En este caso el name del componente Usuario es 'nombre'.
  // Los params le indican al router el path que tiene que tomar
  // mediante el sufijo 'num', que es el número de id del usuario.

  .usuarios(v-for="persona in personas" :key='persona.id')
    router-link(:to=" { name: 'nombre', params: { num: persona.id } } ") 
        h4 {{ persona.username }}

</template>

<script>

export default {
    data() {
    return {
        personas: []
    }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( respuesta => respuesta.json() )
            .then( data => this.personas = data )
            .catch( error => console.log(error.message))
    }
}

</script>


<style lang="stylus">



.usuarios h4

  text-align center
  position flex
  font-size: 14px
  color: white
  background: tan
  text-decoration: none /* sin subrayado */
  padding: 10px 10px
  border-radius: 10px
  transition: 0.3s
  margin-left: 20%
  width: 200px
  display: inline-block /* para que el div tenga el mismo 
  tamaño que el texto, o lo que indique el width */

.usuarios h4:hover 
    background wheat
    color grey

</style>