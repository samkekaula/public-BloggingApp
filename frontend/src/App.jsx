import { Routes, Route } from "react-router-dom";
import NavBar  from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import axios from 'axios'
import { createContext, useState, useEffect } from "react";
import { lookInSession } from "./common/session";
import Editor from "./pages/editor.pages";


axios.defaults.baseURL = 'http://localhost:7000'

export const UserContext = createContext({})



const App = () => {

    const [userAuth, setUserAuth] = useState({});

    useEffect(() =>{

        let userInSession = lookInSession("user")

        userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth
        ({access_token: null})

    },[])

    return (

        <UserContext.Provider value={{userAuth, setUserAuth}}>

        <Routes>
            <Route path="/editor" element={<Editor/>}/>
            <Route path="/" element={<NavBar/>}>
                <Route path="/signin" element={<UserAuthForm type="sign-in"/>}/>
                <Route path="/signup" element={<UserAuthForm type="sign-up"/>}/>
            </Route>
        </Routes>

        </UserContext.Provider>
        )
}

export default App;

