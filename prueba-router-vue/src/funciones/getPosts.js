import { ref } from 'vue'

const getPosts = (id) => {

    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const posts = id ? ref(null) : ref([]);
    
    const load = async () => {

        try {   
            if (id) {
                let data = await fetch(url + id);
                posts.value = await data.json()
            }else{
                let data = await fetch(url);
                posts.value = await data.json()
            }      
        }
        catch (error) { console.log ( error.message ) }
    }

    return { posts, load }
}

export default getPosts