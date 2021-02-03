<template lang="pug">
  
.contenedor  
  h1 Contacto
  label Tu e-mail:
  br
  input(type='email' v-model="email")
  br
  br
  label Mensaje:
  br
  textarea(cols='24' rows='10')
  br
  br
  button ENVIAR

</template>


<style lang="stylus">

label 
  font-size: 16px
  margin 10px


input
  margin 10px
  font-size: 20px
  width: 80%
  


textarea 
  font-size: 20px
  width 80%
  margin 10px

button 
  font-size: 12px
  padding: 10px 20px  
  margin 1px 10px 40px 10px
  font-weight bold

</style>