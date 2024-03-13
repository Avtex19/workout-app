import Header from './components/Header.tsx'
import {Routes, Route} from 'react-router-dom'
import CreateWorkout from "./components/CreateWorkout.tsx";
import HomeCSS from './home.module.css';

export function Home(){



    return <main className={HomeCSS['home-wrapper']}>
           <Header />

        <Routes>

            <Route path={'/create-workout'} element={<CreateWorkout />}></Route>

        </Routes>

    </main>
}

export default Home