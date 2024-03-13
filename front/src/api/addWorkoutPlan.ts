import {WorkoutAPP} from "./axios.ts";
import {ExerciseGroup, MuscleGroup} from "../components/home/components/CreateWorkout.tsx";
export async function addWorkoutPlan(plan:{
    user: number,
    exercises: ExerciseGroup[]
    muscle_groups: MuscleGroup[]
}){


    return await WorkoutAPP.post('/api/plan/', {
        user: plan.user,
        exercises: plan.exercises,
        muscle_groups: plan.muscle_groups
        
    }, {
        headers:{
              "Content-Type": 'application/json'
        }
    })
}

export default addWorkoutPlan;