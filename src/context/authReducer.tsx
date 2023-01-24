import { AuthState } from './AuthContext';

type AuthAction = { type: 'sigIn'};

export const authReducer = (state: AuthState, action:AuthAction ): AuthState => {
    switch (action.type) {
        case 'sigIn':
            return{
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }
    
        default:
            return state;
    }
}