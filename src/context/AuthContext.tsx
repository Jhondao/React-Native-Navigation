// Definir cómo luce, qué información tendré aquí 

import React, { createContext, useReducer } from "react";
import { authReducer } from './authReducer';

export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}


// Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}


// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);


//Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)


    const sigIng = () =>{
        dispatch({type:'sigIn'})
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn: sigIng
        }}>
            { children }
        </AuthContext.Provider>
    )
}