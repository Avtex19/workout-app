import HomeC from './homeC.module.css';
import React, {useState} from "react";
import {ExerciseGroup} from "./CreateWorkout.tsx";


export function DropDownExercises({name, toSelect, setChosen}: {
    name: string, toSelect: ExerciseGroup[],
    setChosen: React.Dispatch<React.SetStateAction<number[]>>
}){

    const [showMenu, setShowMenu] = useState<boolean>(false);



    return <div className={HomeC['dropdown-wrapper']}>
 <button type={"button"}
        onClick={() => setShowMenu((prev) => !prev)}
        >{name}</button>
        {showMenu && <section className={HomeC['dropDown']}>
            {toSelect.map((m) => {
                return <div key={m.id} className={HomeC['dropdown-option']}><input
                    onChange={(e) => {
                        if(e.target.checked){
                            setChosen((prev) => [...prev, m.id])
                        }else{
                            setChosen((prev) => [...prev.filter((o) => m.id === o)])
                        }
                    }}
                    type={"checkbox"}

                /> <p>{m.workout_name}</p></div>
            })}

        </section>}

    </div>
}

export default DropDownExercises;