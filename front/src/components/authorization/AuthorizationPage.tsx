import {useState} from "react";
import Signup from "./components/Signup.tsx";
import {Login} from "./components/Login.tsx";

export function AuthorizationPage(){

    const [currentAuthorizaitonState, setCurrentAuthorizationState] = useState<"LOGIN" | "SIGNUP">("SIGNUP")

    console.log(currentAuthorizaitonState)

    return currentAuthorizaitonState === 'SIGNUP' ? <Signup changeAuthState={setCurrentAuthorizationState} /> : <Login changeAuthState={setCurrentAuthorizationState}/>
}

export default AuthorizationPage;
