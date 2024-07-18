'use client'
import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const UseAuthForLogin =()=>{
        const {isAuth , login ,logout} = useContext(AuthContext);
return(
<>
<button onClick={isAuth ? logout : login}> {isAuth ? 'logout': 'Login'}</button>
</>
)
}
export default UseAuthForLogin