import {useState} from "react";
import {LoginScreen} from "./login";
import {RegisterScreen} from "./register";

export const SwitchLogin = () => {
    const [isLogin, setIsLogin] = useState(false)
    const handlerSwitch = () => {
        return isLogin ? setIsLogin(false) : setIsLogin(true)
    }
    return <div>
        {isLogin ? <LoginScreen/> : <RegisterScreen/>}
        <button onClick={handlerSwitch}>切换登录/注册</button>
    </div>
}
