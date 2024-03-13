import {WorkoutAPP} from "./axios.ts";

export async function getMuscleGroups(){

    return await WorkoutAPP.get('/api/show-workout-category',{
      headers:{
            "Content-Type": 'application/json'
        }
    })
}

export default getMuscleGroups;