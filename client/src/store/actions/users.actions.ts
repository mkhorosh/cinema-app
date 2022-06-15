import { User } from '../../common/User';
import {
    GetUsersAction,
    LoginAction,
    LoginPayload,
    LogoutAction,
    RegisterAction,
    RegisterPayload,
    SetLoginAction,
    SetLogoutAction,
    SetUsersAction,
    UsersActionTypes
} from './users.types';

export const getUsers = (): GetUsersAction => ({
    type: UsersActionTypes.GET_USERS
});
export const setUsers = (users: User[]): SetUsersAction => ({
    type: UsersActionTypes.SET_USERS,
    payload: { users }
});

export const register = (userInfo: RegisterPayload): RegisterAction => ({
    type: UsersActionTypes.REGISTER,
    payload: { ...userInfo }
});

export const setLogin = (
    login: string | null,
    token: string | null
): SetLoginAction => ({
    type: UsersActionTypes.SET_LOGIN,
    payload: { login, token }
});

export const setLogout = (): SetLogoutAction => ({
    type: UsersActionTypes.SET_LOGOUT,
    payload: { login: null, token: null }
});

export const logIn = ({ login, password }: LoginPayload): LoginAction => ({
    type: UsersActionTypes.LOGIN_SEND,
    payload: { login, password }
});

export const logOut = (): LogoutAction => ({
    type: UsersActionTypes.LOGOUT_SEND
});
