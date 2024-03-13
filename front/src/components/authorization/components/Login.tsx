import React, {FormEvent, useState} from "react";
import AuthCSS from "./auth.module.css";
import PasswordIcon from "../icons/password-icon-auth.svg";
import PersonIcon from "../icons/person-icon-auth.svg";
import loginUser from "../../../api/loginUser.ts";
import useToken from "../../../useToken.tsx";

export function Login({
                          changeAuthState
                      }: { changeAuthState: React.Dispatch<React.SetStateAction<"LOGIN" | "SIGNUP">> }) {


    const [formData, setFormData] = useState<{username: string, password: string}>({
        username: '',
        password: '',

    })

    document.title = "Workout Pal / LOG IN"

        useToken()

    const onSubmit = async (e:FormEvent) => {
        e.preventDefault()

        const request = await loginUser({form: formData});

        if(request.status >= 200 && request.status < 300){
             const data = request.data;
             localStorage.setItem("access_token", data.access);
             localStorage.setItem("refresh_token", data.refresh)
            alert("Log in successful");
             window.location.href="/"

        }
        else{
            alert("There was a problem during authorization, check your credentials and try again!")
        }



    }

    return <div className={AuthCSS['authorization-wrapper']}
    >


        <div className={AuthCSS['authorization-header']}><h1>LOG IN</h1>
            <p>not signed up? <span onClick={() => changeAuthState('SIGNUP')}>click here to register</span></p>
        </div>

        <form
            method={'POST'}
             onSubmit={(e) => onSubmit(e)}
            className={AuthCSS['auth-form']}>


            <div>

                <img src={PersonIcon} width={25} height={25} alt={"Person Icon"}/>
                <input placeholder={'Enter your name, e.g. John Doe'}
                       value={formData.username}
                       onChange={(e) => setFormData((prev) => {
                           return {
                               ...prev,
                               username: String(e.target.value)
                           }
                       })}
                       maxLength={255} required/>
            </div>
            <div>
                <img alt={"Password Icon"} width={25} height={25} src={PasswordIcon}/>
                <input placeholder={"Enter password"} type={"password"}
                       value={formData.password}
                       onChange={(e) => setFormData((prev) => {
                           return {
                               ...prev,
                               password: String(e.target.value)
                           }
                       })}
                       required maxLength={255}/>
            </div>

            <div>
                <button className={AuthCSS['reg-next-btn']}

                        type={"submit"}>Log in</button>

            </div>
        </form>


    </div>

}