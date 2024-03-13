import {WorkoutAPP} from "./axios.ts";

export async function getSpecificWorkouts(id: number){

    return await WorkoutAPP.get(`/api/show-workout/${id}`,{
        headers:{
            "Content-Type": 'application/json'
        }
    })
}
export default getSpecificWorkouts;