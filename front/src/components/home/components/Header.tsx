import HomeC from './homeC.module.css';
import {Link} from "react-router-dom";
import parseJWT from "../../parseJWT.ts";
import {useJwt} from "react-jwt";

export function Header(){

    const {decodedToken} = useJwt(String(localStorage.getItem("access_token")))

    const username = decodedToken?.username


    return <section className={HomeC['header-wrapper']}>
        <h1>Welcome <span>{username}</span>!</h1>

        
        
        <div className={HomeC['navigation']}>
            <Link to={'/'}><button>Home</button></Link>
            <Link to={'/create-workout'}><button>Create Plan</button></Link>
            <Link to={'/my-workouts'}><button>My Workouts</button></Link>
            <button onClick={() => {
                localStorage.clear();
                window.location.href = "/authorization"}}
                >Log out</button>
        </div>
    </section>
}

export default Header;
