
<template lang="pug">

.contenedor
    .post(v-if="post")
        h3 {{ post.title }}
        p {{ post.body }}

</template>

<script>
import getPost from "../funciones/getPost";

export default {
    props: ['id'],

    setup(props) {

        const { post, load } = getPost(props.id)

        load()

        return { post }
        
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