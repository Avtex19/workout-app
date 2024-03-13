import {useState} from "react";
import Signup from "./components/Signup.tsx";
import {Login} from "./components/Login.tsx";

export function AuthorizationPage(){

    const [currentAuthorizationState, setCurrentAuthorizationState] = useState<"LOGIN" | "SIGNUP">("SIGNUP")

    return currentAuthorizationState === 'SIGNUP' ? <Signup changeAuthState={setCurrentAuthorizationState} /> : <Login changeAuthState={setCurrentAuthorizationState}/>
}

export default AuthorizationPage;
