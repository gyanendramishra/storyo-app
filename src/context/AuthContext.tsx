import { MouseEvent, FC, useEffect, createContext, useReducer } from "react";
import { EBOOLEAN } from "../utils/enums";
import { TChildren, TAuthState } from "../types";
import authReducer from "../reducers/AuthReducer";

type TAuthContext = {
    login: Function;
    logout: (e: MouseEvent<HTMLAnchorElement> | undefined) => void;
  }

const initialState: TAuthState = {
    isLoggedIn: EBOOLEAN.FALSE,
    user: {},
};

const AuthContext = createContext<TAuthContext & TAuthState>({
    ...initialState,
    login: (email: string, password: string) => {},
    logout: () => {},
});

export const AuthContextProvider: FC<TChildren> = (props) => {
    const [authState, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('loggedIn');
        if(isLoggedIn) {
            const LoggedInUser = localStorage.getItem('user');
            const user = JSON.parse(LoggedInUser!);
            login(user.email, '12345678');
        }
    }, []);

    /**
     * Login the user
     * @param username 
     * @param password 
     */
    const login = (username: string, password: string) => {
        dispatch({
            type: 'LOGIN',
            username,
        });
    };

    /**
     * Logout the user
     */
    const logout = () => {
        dispatch({type: 'LOGOUT',});
    };

    /**
     * Auth state values
     */
    const authStateValues: TAuthContext & TAuthState = {
        isLoggedIn: authState.isLoggedIn,
        user: authState.user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authStateValues}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;