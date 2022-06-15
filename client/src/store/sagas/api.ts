import axios from 'axios';
import { Moment } from 'moment';
import { Session } from '../../common/Session';
import { User } from '../../common/User';
import {
    CreateActionPayload,
    EditActionPayload
} from '../actions/sessions.types';
import { LoginPayload, RegisterPayload } from '../actions/users.types';

// let { token } = JSON.parse(localStorage.getItem('USER_DATA') as string);

// console.log(localStorage.getItem('USER_DATA'));

const instance = axios.create({
    baseURL: 'http://localhost:3003/'
    // withCredentials: true,

    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     contentType: 'application/json'
    // }
    // headers: {
    //     Authorization: `Bearer ${token}`
    // }
});

export const deleteSessionApi = (payload: string) =>
    instance.delete(`sessions/${payload}`);

export const getSessionsApi = async () => {
    const response = await instance.get<Session[]>('sessions');
    return response;
};

export const getUsersApi = async () => {
    const response = await instance.get<User[]>('users');
    return response;
};

export const editSessionApi = (payload: EditActionPayload) => {
    return instance.put<Session>(`sessions/${payload.id}`, {
        ...payload
    });
};

export const createSessionApi = (payload: CreateActionPayload) => {
    return instance.post<Session>(`sessions`, {
        ...payload
    });
};

export interface LoginData {
    login: string;
    token: string;
}

export const LoginApi = (payload: LoginPayload) => {
    return instance.post<LoginData>(`auth/login`, {
        ...payload
    });
};

export interface RegisterData {
    login: string;
    name: string;
    date: string | Moment;
    position: string;
    password: string;
}

export const RegisterApi = (payload: RegisterPayload) => {
    return instance.post<RegisterData>(`auth/register`, {
        ...payload
    });
};
