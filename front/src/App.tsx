import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home.tsx";
import AuthorizationPage from "./components/authorization/AuthorizationPage.tsx";


function App() {

    return (
        <>
          <BrowserRouter>

            <Routes>
              <Route path={"/"} element={<Home />}/>
              <Route path={'/authorization'} element={<AuthorizationPage />} />
            </Routes>

          </BrowserRouter>
        </>

    )
}

export default App
