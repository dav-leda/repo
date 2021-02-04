<template lang="pug">
  
.contenedor  
  h1 Contacto
  label Tu e-mail:
  br
  input(type='email' v-model="email" required)
  br
  br
  label Mensaje:
  br
  textarea(cols='24' rows='10' required)
  br
  br
  button ENVIAR

</template>


<style lang="stylus">

label 
  font-size: 16px
  margin 0 40px


input
  margin 0 40px
  font-size: 20px
  width: 80%
  background snow


textarea 
  font-size: 20px
  width 80%
  margin 0 40px
  background snow

button 
  font-size: 12px
  padding: 10px 20px  
  margin 1px 40px 40px 40px
  font-weight bold
  


</style>