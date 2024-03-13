import {WorkoutAPP} from "./axios.ts";

export async function retrievePlan(id: number){

return await WorkoutAPP.get(`/api/plan/${id}`, {
     headers:{
              "Content-Type": 'application/json'
        }
})

}

export default retrievePlan;