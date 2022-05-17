import axios from 'axios';
import { Session } from '../../common/Session';
import { User } from '../../common/User';
import {
    CreateActionPayload,
    EditActionPayload
} from '../actions/sessions.types';

export const deleteSessionApi = (payload: string) =>
    axios.delete(`http://localhost:3003/sessions/delete/${payload}`);

export const getSessionsApi = async () => {
    const response = await axios.get<Session[]>(
        'http://localhost:3003/sessions'
    );
    return response;
};

export const getUsersApi = async () => {
    const response = await axios.get<User[]>('http://localhost:3003/users/');
    return response;
};

export const editSessionApi = (payload: EditActionPayload) => {
    return axios.put<Session>(`http://localhost:3003/sessions/${payload.id}`, {
        ...payload
    });
};

export const createSessionApi = (payload: CreateActionPayload) => {
    return axios.post<Session>(`http://localhost:3003/sessions`, {
        ...payload
    });
};
