import HomeC from './homeC.module.css';
import React, {useState} from "react";
import {MuscleGroup} from "./CreateWorkout.tsx";


export function DropDown({name, toSelect, setChosen, chosen}: {
    name: string, toSelect: MuscleGroup[],
    chosen: number[],
    setChosen: React.Dispatch<React.SetStateAction<number[]>>
}){

    const [showMenu, setShowMenu] = useState<boolean>(false);



    return <div className={HomeC['dropdown-wrapper']}>
 <button type={"button"}
        onClick={() => setShowMenu((prev) => !prev)}
        >{name}</button>
        {showMenu && <section className={HomeC['dropDown']}>
            {toSelect.map((m) => {
                return <div key={m.workout_type_id} className={HomeC['dropdown-option']}><input
                    onChange={(e) => {
                        if(e.target.checked){
                            setChosen((prev) => [...prev, m.workout_type_id])
                        }else{
                            setChosen((prev) => [...prev.filter((o) => m.workout_type_id !== o)])
                        }
                    }}

                    checked={chosen.includes(m.workout_type_id)}
                    type={"checkbox"}

                /> <p>{m.workout_name}</p></div>
            })}

        </section>}
        
    </div>
}