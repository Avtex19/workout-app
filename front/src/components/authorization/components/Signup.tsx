import React, {FormEvent, useState} from "react";
import AuthCSS from './auth.module.css';
import HeightIcon from '../icons/height-icon-auth.svg';
import WeightIcon from '../icons/weight-icon-auth.svg';
import PersonIcon from '../icons/person-icon-auth.svg';
import {UserRegFormData} from "../authTypes.ts";
import PasswordIcon from '../icons/password-icon-auth.svg';
import ConfirmPasswordIcon from '../icons/confirm-password-icon-auth.svg';
import {registerUser} from "../../../api/registerUser.ts";
import useToken from "../../../useToken.tsx";


export function Signup({
                           changeAuthState
                       }: { changeAuthState: React.Dispatch<React.SetStateAction<"LOGIN" | "SIGNUP">> }) {
    document.title = "Workout Pal / SIGN UP"

    const [formData, setFormData] = useState<UserRegFormData>({
        username: '',
        weight: 70,
        height: 170,
        password: '',
        confirmedPassword: ''
    })

    useToken()
    const [next, showNext] = useState<boolean>(false)


    const onSubmitAuthorize = async (e:FormEvent) =>  {
        e.preventDefault()
        if(formData.password.trim() === formData.confirmedPassword.trim()){

            const request = await registerUser(formData);

            if(request.status >= 200 && request.status < 300){
                alert("Registered Successfully");
                setTimeout(() => {
                        changeAuthState('LOGIN')
                    }
                 , 2000)
            }
        }
    }

    return <div className={AuthCSS['authorization-wrapper']}
    >


        <div className={AuthCSS['authorization-header']}><h1>SIGN UP</h1>
            <p>Already signed up? <span onClick={() => changeAuthState('LOGIN')}>click here to Log in</span></p>
        </div>

        <form className={AuthCSS['auth-form']} method={"POST"} onSubmit={onSubmitAuthorize}>
            {next ? <>

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
                    <img alt={"Confirm Password Icon"} width={25} height={25} src={ConfirmPasswordIcon}/>
                    <input placeholder={"Confirm Password"}
                           required
                           maxLength={255}
                           type={"password"}
                           onChange={(e) => setFormData((prev) => {
                               return {
                                   ...prev,
                                   confirmedPassword: String(e.target.value)
                               }
                           })}
                           value={formData.confirmedPassword}
                    />
                </div>
                {(formData.password !== formData.confirmedPassword && formData.confirmedPassword.trim().length !== 0)
                    && <div className={AuthCSS['password-match-err']}><p>Passwords don't match</p></div>}
            </> : <>
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
                    <img src={HeightIcon} width={25} height={25} alt={"Height Icon"}/>

                    <input title={'Enter your height, e.g. 175(cm)'}
                           value={formData.height}
                           onChange={(e) => setFormData((prev) => {
                               return {
                                   ...prev,
                                   height: Number(e.target.value)
                               }
                           })}
                           type={"number"} min={0} required/>
                </div>


                <div>
                    <img src={WeightIcon} width={25} height={25} alt={"Weight Icon"}/>
                    <input title={'Enter your weight, e.g. 68(kg)'} type={"number"}
                           value={formData.weight}
                           onChange={(e) => setFormData((prev) => {
                               return {
                                   ...prev,
                                   weight: Number(e.target.value)
                               }
                           })}
                           min={0} required/>
                </div>
            </>
            }
          <div>  <button className={AuthCSS['reg-next-btn']}
                         onClick={() => showNext((prev) => !prev)}
                         type="button">{next ? "Go Back" : "Next"}</button>
              {next && <button className={AuthCSS['reg-next-btn']} type={"submit"}>Register</button>}</div>

        </form>


    </div>
}

export default Signup;