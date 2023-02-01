import { AuthState } from './AuthContext';

type AuthAction = 
    | { type: 'sigIn'}
    | { type: 'logout'}
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUserName', payload: string };

export const authReducer = (state: AuthState, action:AuthAction ): AuthState => {
    switch (action.type) {
        case 'sigIn':
            return{
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            };

        case 'logout':
            return{
                ...state,
                isLoggedIn: false,
                favoriteIcon: 'undefined',
                username: 'undefined'
            };

        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            };
        
        case 'changeUserName':
            return{
                ...state,
                username: action.payload
            }

    
        default:
            return state;
    }
}