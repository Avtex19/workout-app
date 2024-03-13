import HomeC from './homeC.module.css';
import {useState} from "react";
import {MuscleGroup} from "./CreateWorkout.tsx";


export function DropDown({name, toSelect}:{name: string, toSelect: MuscleGroup[]}){

        const [showMenu, setShowMenu] = useState<boolean>(false);



    return <div className={HomeC['dropdown-wrapper']}>
 <button type={"button"}
        onClick={() => setShowMenu((prev) => !prev)}
        >{name}</button>
        {showMenu && <section className={HomeC['dropDown']}>
            {toSelect.map((m) => {
                return <div key={m.workout_type_id} className={HomeC['dropdown-option']}><input

                    type={"checkbox"}

                /> <p>{m.workout_name}</p></div>
            })}

        </section>}
        
    </div>
}