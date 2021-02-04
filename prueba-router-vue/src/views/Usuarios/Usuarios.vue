<template lang="pug">
  
.contenedor  
  h1 Usuarios:
  
  // El name le indica al router qué componente tiene que linkear
  // en el archivo router/index.js
  // En este caso es el componente 'UnUsuario' del archivo UnUsuario.vue
  // El name del componente es 'un_usuario'.
  // Los params le indican al router el path que tiene que tomar en el router
  // y la url de la función getUsers()
  // mediante el sufijo 'id', que es el número de id del usuario.

  .usuarios(v-for="user in users" :key='user.id')
    router-link(:to=" { name: 'un_usuario', params: { id: user.id } } ") 
        h4 {{ user.username }}

</template>

<script>

import getUsers from '../../funciones/getUsers'

export default {

    props: ['id'],

    setup() {

        const { users, load } = getUsers()
        load()
        
        return { users }   
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
  margin-left: 26%
  width: 200px
  display: inline-block /* para que el div tenga el mismo 
  tamaño que el texto, o lo que indique el width */

.usuarios h4:hover 
    background wheat
    color grey

</style>