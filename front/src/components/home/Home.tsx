import Header from './components/Header.tsx'
import {Routes, Route, useNavigate} from 'react-router-dom'
import CreateWorkout from "./components/CreateWorkout.tsx";
import HomeCSS from './home.module.css';
import {useJwt} from "react-jwt";
import refreshToken from "../../api/refreshToken.ts";
import RandomQuotes from "./components/RandomQuotes.tsx";


export function Home() {
    const takenToken = localStorage.getItem("access_token");
    const navigator = useNavigate();
    const {isExpired} = useJwt(String(takenToken))

    if(!takenToken){
       navigator('/authorization')
    }


    if (isExpired) {
        const getRefreshToken = async (t: string) => {
            const requestRefresh = await refreshToken(t)
            const data = requestRefresh.data;
            localStorage.setItem("access_token", data.access)
            localStorage.setItem("refresh_token", data.refresh)
        }
        getRefreshToken(String(refreshToken))
    }

    return <main className={HomeCSS['home-wrapper']}>
           <Header />

        <Routes>

            <Route path={'/create-workout'} element={<CreateWorkout />}></Route>
            <Route path={'/'} element={<RandomQuotes />}></Route>
        </Routes>

    </main>
}

export default Home