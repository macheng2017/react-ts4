export interface Form {
    username: string;
    password: string;
}

export interface User {
    name: string;
    password: string;
    token: string;
}

const token = "_token_"
const api_url = process.env.REACT_APP_API_URL || "http://localhost:3001"
const handleUserResponse = ({user}: { user: User }) => {
    window.localStorage.setItem(token, user.token)
    return user
}
export const Login = (form: Form) => {
    return fetch(`${api_url}/login`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    }).then(async r => {
        if (r.ok) {
            return handleUserResponse(await r.json())
        }
        return Promise.reject("fail for login")
    })

}
export const register = (form: Form) => {
    return fetch(`${api_url}/register`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    }).then(async r => {
        if (r.ok) {
            return handleUserResponse(await r.json())
        }
        return Promise.reject("fail for login")
    })

}
export const logout = async () => {
    await window.localStorage.removeItem(token)
}
