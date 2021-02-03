

<template lang="pug">

#nav
  #router
    button#back(@click='back') ⏪
    button#forward(@click='forward') ⏩

  router-link(to="/") 🙋🏻‍♂️
  router-link(to="/usuarios") 👥
  router-link(to="/contacto") 📩
  router-link(to="/about") 💁🏻‍♂️


router-view

</template>


<script>
export default {
  methods: {
    back() { this.$router.go(-1) },
    forward() { this.$router.go(1) }
  }
}
</script>



<style lang="stylus">

#app 
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  
  color: #2c3e50


#nav 
  text-align center
  padding: 30px
  margin-top 80px
  position relative
 
#nav a 
  font-size 30px
  color: black
  background: lightgrey
  text-decoration: none /* sin subrayado */
  padding: 10px 20px
  border-radius: 10px
  border: 1px solid black
  margin: 16px
  


#nav a.router-link-exact-active 
  color: black
  background: whitesmoke


#router 
  text-align center
  
  background transparent
  
  

#router button
  position absolute
  font-size 20px
  background transparent
  color: black
  border none
  padding: 0 10px
  border-radius: 10px
  margin-top: -70px
  
  alignt-items: center

#router #back
  
  left 20vw

#router #forward

  right 20vw
  

#router :hover 
  background lightgrey

</style>
