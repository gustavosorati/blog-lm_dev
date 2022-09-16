import { useState } from "react";
import { api } from "../../utils/axios";
import { SignInContainer } from "./styles";

export function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSignIn(e: any) {
        e.preventDefault();
        // console.log(e.target.teste.value)
        const response = await api.post('/user/login', {
            username,
            password
        });

        console.log(response)
    }

    console.log(username)
    return (
        <SignInContainer>
            <form onSubmit={handleSignIn}>
                <input 
                    name="username" 
                    placeholder="Email" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username} 
                />
                <input 
                    name="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}  
                />

                <button type="submit">Log In</button>
            </form>
        </SignInContainer>
    )
}