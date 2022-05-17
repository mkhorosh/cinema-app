export interface LoginState {
    login: string | null;
    token: string | null;
    isLoginLoading: boolean;
}

export enum LoginActionTypes {
    SET_LOGIN = 'SET_LOGIN',
    LOGIN_SEND = 'LOGIN_SEND',
    LOGIN_LOADING = 'LOGIN_LOADING',
    SET_LOGOUT = 'SET_LOGOUT',
    LOGOUT_SEND = 'LOGOUT_SEND'
}

export interface SetLoginLoadingAction {
    type: LoginActionTypes.LOGIN_LOADING;
    payload: { isLoginLoading: boolean };
}

export interface SetLoginAction {
    type: LoginActionTypes.SET_LOGIN;
    payload: { login: string | null; token: string | null };
}

export interface LoginPayload {
    login: string;
    password: string;
}

export interface LoginAction {
    type: LoginActionTypes.LOGIN_SEND;
    payload: LoginPayload;
}

export interface LogoutAction {
    type: LoginActionTypes.LOGOUT_SEND;
}

export interface SetLogoutAction {
    type: LoginActionTypes.SET_LOGOUT;
    payload: { login: null; token: null };
}

export type LoginActions =
    | LoginAction
    | LogoutAction
    | SetLoginAction
    | SetLogoutAction
    | SetLoginLoadingAction;
