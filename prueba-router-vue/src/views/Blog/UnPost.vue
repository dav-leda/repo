
<template lang="pug">

.contenedor
    .post(v-if="posts")
        h3 {{ posts.title }}
        p {{ posts.body }}

</template>

<script>

import getPosts from "../../funciones/getPosts";

export default {
    props: ['id'],

    setup(props) {

        const { posts, load } = getPosts(props.id)
        load()
        return { posts }
    }
}
</script>


<style lang="stylus">

.post 
    max-width 600px
    margin-left 30px

.post p 
    color brown
    line-height 1em
    max-width 600px
    margin-left -40px 
    
</style>