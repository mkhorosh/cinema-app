import { Moment } from 'moment';
import { User } from '../../common/User';

export interface UsersState {
    users: User[];
    login: string | null;
    token: string | null;
}

export enum UsersActionTypes {
    SET_LOGIN = 'SET_LOGIN',
    LOGIN_SEND = 'LOGIN_SEND',
    SET_LOGOUT = 'SET_LOGOUT',
    LOGOUT_SEND = 'LOGOUT_SEND',
    SET_REGISTER = 'SET_REGISTER',
    REGISTER = 'REGISTER',
    GET_USERS = 'GET_USERS',
    SET_USERS = 'SET_USERS'
}

export interface SetUsersAction {
    type: UsersActionTypes.SET_USERS;
    payload: {
        users: User[];
    };
}

export interface GetUsersAction {
    type: UsersActionTypes.GET_USERS;
}

export interface SetRegisterAction {
    type: UsersActionTypes.SET_REGISTER;
}

export interface RegisterPayload {
    login: string;
    name: string;
    date: string | Moment;
    position: string;
    password: string;
}

export interface RegisterAction {
    type: UsersActionTypes.REGISTER;
    payload: RegisterPayload;
}

export interface SetLoginAction {
    type: UsersActionTypes.SET_LOGIN;
    payload: { login: string | null; token: string | null };
}

export interface LoginPayload {
    login: string;
    password: string;
}

export interface LoginAction {
    type: UsersActionTypes.LOGIN_SEND;
    payload: LoginPayload;
}

export interface LogoutAction {
    type: UsersActionTypes.LOGOUT_SEND;
}

export interface SetLogoutAction {
    type: UsersActionTypes.SET_LOGOUT;
    payload: { login: null; token: null };
}

export type UsersActions =
    | SetUsersAction
    | GetUsersAction
    | SetRegisterAction
    | RegisterAction
    | LoginAction
    | LogoutAction
    | SetLoginAction
    | SetLogoutAction;
