import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacto from '../views/Contacto.vue'
import Usuarios from '../views/personas/Usuarios.vue'
import Usuario from '../views/personas/Usuario.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Usuarios
  },
  {
    // El "name" identifica al componente "Usuarios"
    // que es importado del archivo Usuarios.vue

    path: '/usuarios/:num',
    name: 'nombre', // El name le indica al router qué componente tiene que linkear.
    component: Usuario,
    props: true 
    // Al hacer que este componente
    // acepte props no es necesario usar la función
    // data() en el componente.
    // Pero el path tiene que tener el mismo nombre que el prop,
    // en este caso ":num".
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
