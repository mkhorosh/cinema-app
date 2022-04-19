import axios from 'axios';
import { Session } from '../../common/Session';

export const deleteSessionApi = (sessionKey: string) =>
    axios.delete(`http://localhost:3003/delete/${sessionKey}`);

export const getSessionsApi = async () => {
    const response = await axios.get<Session[]>('http://localhost:3003/');
    return response;
};

export const editSessionApi = (newSession: Session) => {
    return axios.put<Session>(`http://localhost:3003/${newSession._id}`, {
        ...newSession
    });
};

export const createSessionApi = (newSession: Session) => {
    return axios.post<Session>(`http://localhost:3003/${newSession._id}`, {
        ...newSession
    });
};
