

<template lang="pug">

.post-list 
    .posts(v-for="post in posts" :key="post.id")
        
        SinglePost(:post="post")

</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
     
    props: ['posts'],
    components: { SinglePost },
}
</script>


<style lang="stylus">

.post-list 
    color black

.posts 
    color black

</style>