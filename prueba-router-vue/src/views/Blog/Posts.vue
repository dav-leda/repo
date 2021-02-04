<template lang="pug">

.contenedor(v-if="posts.length")
    h1 Blog
    br 
    PostList(:posts="posts")

div(v-else)
    h4 Cargando datos...

</template>


<script>

import PostList from '../../components/PostList'
import getPosts from '../../funciones/getPosts'

export default {
    props: ['id'],
    name: 'Posts',
    components: { PostList },

    setup() {

        const { posts, load } = getPosts()
        load()

        return { posts }   
    }
}
</script>

