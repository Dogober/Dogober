import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true')
    }
    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="User name"/>
                <MyInput type="password" placeholder="Parol"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}

export default Login;