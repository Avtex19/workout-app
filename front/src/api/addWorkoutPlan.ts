import {WorkoutAPP} from "./axios.ts";
export async function addWorkoutPlan(plan:{
    user: number,
    exercises: number[],
    muscle_groups: number[]
}){


    return await WorkoutAPP.post('/api/plan/', plan, {
        headers:{
              "Content-Type": 'application/json'
        }
    })
}

export default addWorkoutPlan;