import {WorkoutAPP} from './axios.ts';


export async function loginUser({form}:{form: {username: string, password:string}}){


    return await WorkoutAPP.post('/api/token/', {
        username: form.username,
        password: form.password

    }, {

   headers:{
            "Content-Type": 'application/json'
        }
    })
}

export default loginUser;