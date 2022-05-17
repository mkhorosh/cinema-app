import axios from 'axios';
import { LoginPayload } from '../actions/login.types';

export interface LoginData {
    login: string;
    token: string;
}

export const LoginApi = (payload: LoginPayload) => {
    return axios.post<LoginData>(`http://localhost:3003/auth/login`, {
        ...payload
    });
};
