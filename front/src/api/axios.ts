import axios from 'axios'


export const WorkoutAPP = axios.create({
    baseURL: 'http://localhost:8000/'
})
