import { Session } from '../../common/Session';
import {
    CreateActionPayload,
    CreateSessionAction,
    DeleteSessionAction,
    EditActionPayload,
    EditSessionAction,
    GetSessionsAction,
    SessionsActionTypes,
    SetLoadingAction,
    SetSessionsAction
} from './sessions.types';

export const getSessions = (): GetSessionsAction => ({
    type: SessionsActionTypes.GET_SESSIONS
});
export const setSessions = (sessionsList: Session[]): SetSessionsAction => ({
    type: SessionsActionTypes.SET_SESSIONS,
    payload: { sessionsList }
});

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
    type: SessionsActionTypes.SESSIONS_LOADING,
    payload: { isLoading }
});

export const deleteSession = (sessionKey: string): DeleteSessionAction => ({
    type: SessionsActionTypes.DELETE_SESSION,
    payload: sessionKey
});

export const editSession = ({
    id,
    filmName,
    filmDescription,
    supervisor,
    theatre,
    startDate,
    endDate,
    duration,
    genre
}: EditActionPayload): EditSessionAction => ({
    type: SessionsActionTypes.EDIT_SESSION,
    payload: {
        id,
        filmName,
        filmDescription,
        supervisor,
        theatre,
        startDate,
        endDate,
        duration,
        genre
    }
});

export const createSession = ({
    filmName,
    filmDescription,
    supervisor,
    theatre,
    startDate,
    endDate,
    duration,
    genre
}: CreateActionPayload): CreateSessionAction => ({
    type: SessionsActionTypes.CREATE_SESSION,
    payload: {
        filmName,
        filmDescription,
        supervisor,
        theatre,
        startDate,
        endDate,
        duration,
        genre
    }
});
