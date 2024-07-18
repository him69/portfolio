'use client'
import React, { useState } from "react";

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const handleLogin=()=>{
        setIsLogin(!isLogin);
    }
    return (
        <>
            {isLogin?<h2>Welcome you !</h2>:<h2>Please Login</h2> }
            <button role="button" onClick={handleLogin}>{isLogin?'logout':'login'}</button>
        </>
    )
}
export default Login;