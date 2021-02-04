import { ref } from 'vue'

const getUsers = (id) => {

    const url = 'https://jsonplaceholder.typicode.com/users/';
    const users = id ? ref(null) : ref([]);
    
    const load = async () => {

        try {   
            if (id) {
                let data = await fetch(url + id);
                users.value = await data.json()
            }else{
                let data = await fetch(url);
                users.value = await data.json()
            }      
        }
        catch (error) { console.log ( error.message ) }
    }

    return { users, load }
}

export default getUsers