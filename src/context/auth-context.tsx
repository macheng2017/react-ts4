import {createContext, ReactNode, useContext, useState} from "react";
import * as auth from "../auth/auth-provider"
import {Form, User} from "../auth/auth-provider"

const AuthContext = createContext<{
    user: User | null,
    login: (form: Form) => Promise<void>,
    register: (form: Form) => Promise<void>,
    logout: () => {}
} | null>(null)

AuthContext.displayName = "AuthContext"

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const login = (form: Form) => auth.Login(form).then(r => setUser(r))
    const register = (form: Form) => auth.register(form).then(r => setUser(r))
    const logout = () => auth.logout().then(() => setUser(null))

    return <AuthContext.Provider children={children} value={{user, login, register, logout}}/>
}
export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context

}
