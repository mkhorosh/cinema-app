import { Session } from '../../common/Session';
import {
    DeleteSession,
    DELETE_SESSION,
    GetSessions,
    GET_SESSIONS,
    SetSessions,
    SET_SESSIONS
} from './sessions';

export const getSessions = (): GetSessions => ({ type: GET_SESSIONS });
export const deleteSession = (sessionKey: string): DeleteSession => ({
    type: DELETE_SESSION,
    payload: { sessionKey }
});
export const setSessions = (sessionsList: Session[]): SetSessions => ({
    type: SET_SESSIONS,
    payload: { sessionsList }
});

export type SessionActions = GetSessions;
