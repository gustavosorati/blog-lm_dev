import { FormEvent, useContext, useState } from "react";
import { ButtonComponent } from "../../components/Forms/Button";
import { InputComponent } from "../../components/Forms/Inputs";
import { UserContext } from "../../context/UserContext";
import { SignInContainer } from "./styles";

export function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useContext(UserContext);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        await login(username, password);
    }

    return (
        <SignInContainer>
            <form onSubmit={handleSubmit}>
                <InputComponent 
                    name="username" 
                    placeholder="Usuário" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username} 
                />
                <InputComponent 
                    name="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                />

                <ButtonComponent />
            </form>
        </SignInContainer>
    )
}