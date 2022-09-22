import { createContext, ReactNode, useState } from "react";
import { api } from "../utils/axios";

interface User {

}

interface IUserContext {
    user: User | null;
    isLoading: boolean;
    error: boolean;
    
    login: (username: string, password: string) => Promise<void>;
}


export const UserContext = createContext<IUserContext>({} as IUserContext);

interface IUserProvider {
    children: ReactNode;
}

export const UserProvider = ({ children } : IUserProvider) => {
    const [user, setUser] = useState<User>({} as User);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    async function login(username: string, password: string) {
        setIsLoading(true);
        try {
            const response = await api.post('/user/login', {
                username,
                password
            });

            setUser(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <UserContext.Provider value={{user, isLoading, error, login}}>
            {children}
        </UserContext.Provider>
    )
}