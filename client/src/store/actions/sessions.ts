import { Session } from '../../common/Session';

export interface SessionsState {
    sessions: Session[];
}

export enum SessionsActionTypes {
    GET_SESSIONS = 'GET_SESSIONS',
    SET_SESSIONS = 'SET_SESSIONS',
    DELETE_SESSION = 'DELETE_SESSION',
    EDIT_SESSION = 'EDIT_SESSION',
    CREATE_SESSION = 'CREATE_SESSION'
}

export interface SetSessionsAction {
    type: SessionsActionTypes.SET_SESSIONS;
    payload: {
        sessions: Session[];
    };
}

export interface GetSessionsAction {
    type: SessionsActionTypes.GET_SESSIONS;
}
export interface DeleteSessionAction {
    type: SessionsActionTypes.DELETE_SESSION;
    payload: { sessionKey: string };
}

export interface EditSessionAction {
    type: SessionsActionTypes.EDIT_SESSION;
    payload: { newSession: Session };
}

export interface CreateSessionAction {
    type: SessionsActionTypes.CREATE_SESSION;
    payload: { newSession: Session };
}

export type SessionsAction =
    | SetSessionsAction
    | GetSessionsAction
    | DeleteSessionAction
    | EditSessionAction
    | CreateSessionAction;
