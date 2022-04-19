import { Session } from '../../common/Session';
import {
    CreateSessionAction,
    DeleteSessionAction,
    EditSessionAction,
    GetSessionsAction,
    SessionsActionTypes,
    SetSessionsAction
} from './sessions';

export const getSessions = (): GetSessionsAction => ({
    type: SessionsActionTypes.GET_SESSIONS
});
export const setSessions = (sessions: Session[]): SetSessionsAction => ({
    type: SessionsActionTypes.SET_SESSIONS,
    payload: { sessions }
});
export const deleteSession = (sessionKey: string): DeleteSessionAction => ({
    type: SessionsActionTypes.DELETE_SESSION,
    payload: { sessionKey }
});

export const editSession = (newSession: Session): EditSessionAction => ({
    type: SessionsActionTypes.EDIT_SESSION,
    payload: { newSession }
});

export const createSession = (newSession: Session): CreateSessionAction => ({
    type: SessionsActionTypes.CREATE_SESSION,
    payload: { newSession }
});
