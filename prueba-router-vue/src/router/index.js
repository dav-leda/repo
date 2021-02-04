import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacto from '../views/Contacto.vue'
import Posts from '../views/Blog/Posts.vue'
import UnPost from '../views/Blog/UnPost.vue'
import Usuarios from '../views/Usuarios/Usuarios.vue'
import UnUsuario from '../views/Usuarios/UnUsuario.vue'

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
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'un_post',
    component: UnPost,
    props: true
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Usuarios
  },
  {
    // El "name" identifica al componente "UnUsuario"
    // que es importado del archivo UnUsuario.vue

    path: '/usuarios/:id',
    name: 'un_usuario', // El name le indica al router qué componente tiene que linkear.
    component: UnUsuario,
    props: true 
    // Al hacer que este componente
    // acepte props no es necesario usar la función
    // data() en el componente.
    // Pero el path tiene que tener el mismo nombre que el prop,
    // en este caso ":id".
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
