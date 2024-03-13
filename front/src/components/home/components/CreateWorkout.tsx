import HomeC from './homeC.module.css';

export function CreateWorkout(){


    return <section className={HomeC['create-plan-wrapper']}>
        <h1>DESIGN <span>YOUR OWN</span> PROGRAM</h1>
        <form className={HomeC['workout-plan-form']}>
            <div>
                <p>Plan Name</p>
                <input placeholder={"input your plan name"} type={"text"}
                       maxLength={255}
                />
                
            </div>

            <div>
                <p>Muscle Groups</p>

            </div>

        </form>

    </section>
}

export default CreateWorkout;