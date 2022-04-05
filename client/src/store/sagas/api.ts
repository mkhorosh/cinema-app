import axios from 'axios';
import { Session } from '../../common/Session';

export const deleteSession = (sessionKey: string) =>
    axios.delete(`/delete/${sessionKey}`);

export const getSessions = async () => {
    return axios.get<Session[]>('/sessionList');
};
