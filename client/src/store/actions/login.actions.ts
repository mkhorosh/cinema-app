import {
    LoginAction,
    LoginActionTypes,
    LoginPayload,
    LogoutAction,
    SetLoginAction,
    SetLoginLoadingAction,
    SetLogoutAction
} from './login.types';

export const setLoginLoading = (
    isLoginLoading: boolean
): SetLoginLoadingAction => ({
    type: LoginActionTypes.LOGIN_LOADING,
    payload: { isLoginLoading }
});

export const setLogin = (
    login: string | null,
    token: string | null
): SetLoginAction => ({
    type: LoginActionTypes.SET_LOGIN,
    payload: { login, token }
});

export const setLogout = (): SetLogoutAction => ({
    type: LoginActionTypes.SET_LOGOUT,
    payload: { login: null, token: null }
});

export const logIn = ({ login, password }: LoginPayload): LoginAction => ({
    type: LoginActionTypes.LOGIN_SEND,
    payload: { login, password }
});

export const logOut = (): LogoutAction => ({
    type: LoginActionTypes.LOGOUT_SEND
});
