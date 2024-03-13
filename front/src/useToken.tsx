import {useNavigate} from "react-router-dom";

import refreshToken from "./api/refreshToken.ts";
import {useJwt} from "react-jwt";

export function useToken(){
  const takenToken = localStorage.getItem("access");
    const navigator = useNavigate();
    const {isExpired} = useJwt(String(takenToken))

    if (takenToken && isExpired) {
        const getRefreshToken = async (t: string) => {
            const requestRefresh = await refreshToken(t)
            const data = requestRefresh.data;
            localStorage.setItem("access", data.access)
            localStorage.setItem("refresh", data.refresh)
        }
        getRefreshToken(String(refreshToken))
    }
    if(takenToken && !isExpired){
        navigator('/')
    }
}
export default useToken;