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
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (username: string) => void;
}


// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);


//Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () =>{
        dispatch({type:'sigIn'})
    }

    const logout = () => {
        dispatch({type:'logout'})
    }

    const changeFavoriteIcon = ( iconName: string) => {
        dispatch({type:'changeFavIcon', payload: iconName})
    }

    const changeUserName = ( username: string) => {
        dispatch({type:'changeUserName', payload: username})
    }


    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUserName
        }}>
            { children }
        </AuthContext.Provider>
    )
}