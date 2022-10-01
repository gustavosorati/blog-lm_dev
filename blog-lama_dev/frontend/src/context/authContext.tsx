import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../utils/api";

type IAuthContext = {
  currentUser: User;
  login: (input: Object) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

type Props = {
  children: ReactNode;
}

type User = {
  id: number;
  username: string;
  email: string;
  img: string | null;
} | null

export function AuthProvider({children}: Props) {
  const [currentUser, setCurrentUser] = useState<User>(() => {
    const user = localStorage.getItem('@lama_blog:user');

    if(user) {
      return JSON.parse(user)
    }
    return null;
  });

  const login = async(data: Object) => {
    const res = await api.post('/auth/login', data, {
      withCredentials: true,
    });
    setCurrentUser(res.data);
  }

  const logout = async() => {
    await api.post('/auth/logout');
    setCurrentUser(null);
  }

  useEffect(() => {
    localStorage.setItem("@lama_blog:user", JSON.stringify(currentUser));
  }, [currentUser]);
  

  return (
    <AuthContext.Provider value={{currentUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}