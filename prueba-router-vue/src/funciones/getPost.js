import { ref } from 'vue'

const getPost = (id) => {

    const post = ref(null)

    const load = async () => {
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);

            post.value = await data.json()
        }
        catch (error) { console.log ( error.message ) }
    }

    return { post, load }
}

export default getPost