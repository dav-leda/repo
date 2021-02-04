import { ref } from 'vue'

const getPosts = () => {

    const posts = ref([])

    const load = async () => {
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts');

            posts.value = await data.json()

            console.log (posts.value.length)
        }
        catch (error) { console.log ( error.message ) }
    }

    return { posts, load }
}

export default getPosts