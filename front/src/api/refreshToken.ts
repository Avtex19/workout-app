import {WorkoutAPP} from "./axios.ts";
export async function refreshToken(refreshToken: string){


    return await WorkoutAPP.post('/api/token/refresh/', {refresh:refreshToken}, {
       headers:{
            "Content-Type": 'application/json'
        }
    })

}

export default refreshToken;