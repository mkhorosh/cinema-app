import { Session } from '../../common/Session';

export const GET_SESSIONS: string = 'GET_SESSIONS';
export const DELETE_SESSION: string = 'DELETE_SESSION';
export const SET_SESSIONS: string = 'SET_SESSIONS';

export interface GetSessions {
    type: typeof GET_SESSIONS;
}

export interface DeleteSession {
    type: typeof DELETE_SESSION;
    payload: { sessionKey: string };
}

export interface SetSessions {
    type: typeof SET_SESSIONS;
    payload: {
        sessionsList: Session[];
    };
}
