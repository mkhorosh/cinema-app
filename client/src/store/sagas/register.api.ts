import axios from 'axios';
import { Moment } from 'moment';
import { RegisterPayload } from '../actions/register.types';

export interface RegisterData {
    login: string;
    name: string;
    date: string | Moment;
    position: string;
    password: string;
}

export const RegisterApi = (payload: RegisterPayload) => {
    return axios.post<RegisterData>(`http://localhost:3003/auth/register`, {
        ...payload
    });
};
