import HomeC from './homeC.module.css';
import {DropDown} from "./DropDown.tsx";
import {useState, useEffect, FormEvent} from "react";
import getMuscleGroups from "../../../api/getMuscleGroups.ts";
import DropDownExercises from "./DropDownExercises.tsx";
import getSpecificWorkouts from "../../../api/getSpecificWorkouts.ts";
import addWorkoutPlan from "../../../api/addWorkoutPlan.ts";
import {useJwt} from "react-jwt";
export type MuscleGroup = {
    workout_type_id:
        number,
    workout_name: string
}

export type ExerciseGroup = {
    id: number,
    workout_category: MuscleGroup,
    workout_name: string,
    workout_sets_n: number,
    workout_set_duration_m: number,
    description: string
}
export function CreateWorkout(){

    const [availableMuscleGroups, setAvailableMuscleGroups] = useState<MuscleGroup[]>([]);
    const {decodedToken} = useJwt(String(localStorage.getItem("access_token")))
    const [chosenMuscleGroups, setChosenMuscleGroups] = useState<MuscleGroup[]>([])
    const [chosenExerciseIDs, setChosenExerciseIDs] = useState<ExerciseGroup[]>([])
    const [availableExercises, setAvailableExercises] = useState<ExerciseGroup[]>([])


    useEffect(() =>{
        const requestSpecificWorkout = async () =>{
            let data:ExerciseGroup[] = []
            for(let i =0; i < chosenMuscleGroups.length; i++){
                const request = await getSpecificWorkouts(chosenMuscleGroups[i].workout_type_id)
                const returnedData = request.data;
                data = [...data, ...returnedData]
            }

            setAvailableExercises(data)

        }
        requestSpecificWorkout()

    }, [chosenMuscleGroups.length])
        useEffect(() =>{

            const fetchAvailableMuscleGroups = async () => {
                const request = await getMuscleGroups();
                const data = request.data;
                setAvailableMuscleGroups(data)
                console.log(data)
            }
        fetchAvailableMuscleGroups()
        }, [])

    const submitPlan = async (e:FormEvent) => {
        e.preventDefault()
        const requestPlanSubmission = await addWorkoutPlan(
            {
                user: Number(decodedToken?.user_id),
                exercises: chosenExerciseIDs,
                muscle_groups: chosenMuscleGroups
            }
        )
        const data = requestPlanSubmission.data;
        console.log(data)


    }
    return <section className={HomeC['create-plan-wrapper']}>
        <h1>DESIGN <span>YOUR OWN</span> PROGRAM</h1>
        <form className={HomeC['workout-plan-form']}
        onSubmit={(e) => submitPlan(e)}
        >
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
                <DropDown
                    chosen={chosenMuscleGroups}
                    name={"Choose target muscles"} toSelect={availableMuscleGroups}
                setChosen={setChosenMuscleGroups}
                />
            </div>

            {availableExercises.length > 0 && <div className={HomeC['form-option']}>
                <p>Exercises</p>
                <DropDownExercises
                    chosenExercises={chosenExerciseIDs}
                    name={"Choose exercises"}
                                   setChosen={setChosenExerciseIDs}
                                   toSelect={availableExercises}/>

            </div>}

            {chosenExerciseIDs.length > 0 && <div className={HomeC['form-option-btn-wrap']}><button className={HomeC['create-workout-plan-btn']} type={"submit"}>Create Workout Plan</button></div>}
        </form>

    </section>
}

export default CreateWorkout;