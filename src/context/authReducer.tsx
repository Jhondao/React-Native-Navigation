import { AuthState } from './AuthContext';

type AuthAction = 
    | { type: 'sigIn'}
    | { type: 'logout'}
    | { type: 'changeFavIcon', payload: string };

export const authReducer = (state: AuthState, action:AuthAction ): AuthState => {
    switch (action.type) {
        case 'sigIn':
            return{
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            };

        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }

        case 'logout':
            return{
                ...state,
                isLoggedIn: false,
                favoriteIcon: 'undefined',
                username: 'undefined'
            }
    
        default:
            return state;
    }
}