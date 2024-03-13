import {UserRegFormData} from "../components/authorization/authTypes.ts";
import {WorkoutAPP} from "./axios.ts";
export async function registerUser(data: UserRegFormData){
    return await WorkoutAPP.post('/api/create/user/', {
        user: {
            username:data.username,
            height: data.height,
            weight: data.weight,
            password: data.password
        }
    }, {
        headers:{
            "Content-Type": 'application/json'
        }
    })
}