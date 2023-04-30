import { TUser, TType } from "../types";

export type TAuthState = {
    isLoggedIn: boolean;
    user: TUser | {};
}

export type TAuthAction = {
    username?: string;
} & TType;