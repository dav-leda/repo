<template lang="pug">

.contenedor(v-if="users")
    .usuario
        h3 Usuario: 
            span {{ users.username }}
        h3 Nombre: 
            span {{ users.name }}
        h3 e-mail: 
            span {{ users.email }}

div(v-else)
    h4 Cargando datos...

</template>


<script>

import getUsers from '../../funciones/getUsers'

export default {

    props: ['id'], 

    setup(props) {

        const { users, load } = getUsers(props.id)
        load()
        
        return { users }   
    }    
}

</script>



<style lang="stylus">

.usuario h3
    color brown
    padding-left 30px
    
span 
    color black
    
h4 
    text-align center
</style>