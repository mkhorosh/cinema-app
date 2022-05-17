import { Moment } from 'moment';
import { Session } from '../../common/Session';
import { User } from '../../common/User';

export interface SessionsState {
    sessionsList: Session[];
    isLoading: boolean;
    users: User[];
}

export enum SessionsActionTypes {
    GET_SESSIONS = 'GET_SESSIONS',
    SESSIONS_LOADING = 'SESSIONS_LOADING',
    SET_SESSIONS = 'SET_SESSIONS',
    GET_USERS = 'GET_USERS',
    SET_USERS = 'SET_USERS',
    DELETE_SESSION = 'DELETE_SESSION',
    EDIT_SESSION = 'EDIT_SESSION',
    CREATE_SESSION = 'CREATE_SESSION'
}

export interface SetSessionsAction {
    type: SessionsActionTypes.SET_SESSIONS;
    payload: {
        sessionsList: Session[];
    };
}
export interface SetLoadingAction {
    type: SessionsActionTypes.SESSIONS_LOADING;
    payload: { isLoading: boolean };
}

export interface GetSessionsAction {
    type: SessionsActionTypes.GET_SESSIONS;
}
export interface SetUsersAction {
    type: SessionsActionTypes.SET_USERS;
    payload: {
        users: User[];
    };
}

export interface GetUsersAction {
    type: SessionsActionTypes.GET_USERS;
}
export interface DeleteSessionAction {
    type: SessionsActionTypes.DELETE_SESSION;
    payload: string;
}

export interface EditActionPayload {
    id: string;
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    date: string | Moment;
    duration: string | Moment;
    genre: string;
}
export interface EditSessionAction {
    type: SessionsActionTypes.EDIT_SESSION;
    payload: EditActionPayload;
}

export interface CreateActionPayload {
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    date: string | Moment;
    duration: string | Moment;
    genre: string;
}
export interface CreateSessionAction {
    type: SessionsActionTypes.CREATE_SESSION;
    payload: CreateActionPayload;
}

export type SessionsAction =
    | SetSessionsAction
    | SetLoadingAction
    | GetSessionsAction
    | SetUsersAction
    | GetUsersAction
    | DeleteSessionAction
    | EditSessionAction
    | CreateSessionAction;
