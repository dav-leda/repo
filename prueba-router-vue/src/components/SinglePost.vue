

<template lang="pug">

.post(v-if="numero_de_posts") 
    router-link(:to="{ name: 'details', params: { id: post.id } }") 
    
        h3 {{ titulo_corto }}
    h4 {{ texto_corto }}
    
</template>

<script>

import { computed } from 'vue'

export default {
    props: ['post'],

    setup(props) {

        const numero_de_posts = props.post.id <= 5;

        const titulo_corto = computed( () => {
            return props.post.title.substring(0, 30) + '...'
        })
        
        const texto_corto = computed( () => {
            return props.post.body.substring(0, 100) + '...'
        })

        return { titulo_corto, texto_corto, numero_de_posts }

    }
    
}
</script>

<style lang="stylus">

.post h4 
    color black
    padding 0
    text-align left

</style>