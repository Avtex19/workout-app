import HomeC from './homeC.module.css';
import {DropDown} from "./DropDown.tsx";
import {useState, useEffect} from "react";
import getMuscleGroups from "../../../api/getMuscleGroups.ts";
export type MuscleGroup = {
workout_type_id:
            number,
        workout_name: string
    }
export function CreateWorkout(){

    const [availableMuscleGroups, setAvailableMuscleGroups] = useState<MuscleGroup[]>([]);


    const [chosenMuscleGroups, setChosenMuscleGroups] = useState<MuscleGroup[]>([])
    const [exercises, setExercises] = useState<string[]>([])

        useEffect(() =>{

            const fetchAvailableMuscleGroups = async () => {
                const request = await getMuscleGroups();
                const data = request.data;
                setAvailableMuscleGroups(data)
                console.log(data)
            }
        fetchAvailableMuscleGroups()
        }, [])

    return <section className={HomeC['create-plan-wrapper']}>
        <h1>DESIGN <span>YOUR OWN</span> PROGRAM</h1>
        <form className={HomeC['workout-plan-form']}>
            <div className={HomeC['form-option']}>
                <p>Plan Name</p>
                <input type={"text"}
                       className={HomeC['form-input']}
                       placeholder={"e.g. Push/Pull/Legs"}
                       maxLength={255}
                />
                
            </div>

              <div className={HomeC['form-option']}>

                   <p>Muscle Groups</p>
                <DropDown name={"Choose target muscles"} toSelect={availableMuscleGroups}/>
            </div>

              <div className={HomeC['form-option']}>
                   <p>Exercises</p>
               <DropDown name={"Choose exercises"} toSelect={['Bench Press', 'Dumbbel Rows', 'Biceps']}/>

            </div>
        </form>

    </section>
}

export default CreateWorkout;