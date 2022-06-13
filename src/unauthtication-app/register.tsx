import {FormEvent} from "react";
import {useAuth} from "../context/auth-context";

export const RegisterScreen = () => {
    const {register} = useAuth()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget[0] as HTMLInputElement).value
        const password = (event.currentTarget[1] as HTMLInputElement).value
        register({username,password}).then(r=>console.log(r))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={"username"}>username:</label>
                <input type={"text"}/>
            </div>
            <div>
                <label htmlFor={"password"}>password</label>
                <input type={"password"}/>
            </div>
            <button>注册</button>
        </form>
    )
}
