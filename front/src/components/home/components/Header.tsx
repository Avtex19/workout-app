import HomeC from './homeC.module.css';
import {Link} from "react-router-dom";

export function Header(){
    const username = "USERNAME"


    return <section className={HomeC['header-wrapper']}>
        <h1>Welcome <span>{username}</span>!</h1>

        
        
        <div className={HomeC['navigation']}>
            <Link to={'/create-workout'}><button>Create Plan</button></Link>
            <Link to={'/my-workouts'}><button>My Workouts</button></Link>
            <button>Log out</button>

        </div>
    </section>
}

export default Header;