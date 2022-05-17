import { Moment } from 'moment';

export interface RegisterState {
    fromRegister: boolean;
    isRegisterLoading: boolean;
}

export enum RegisterActionTypes {
    SET_REGISTER = 'SET_REGISTER',
    REGISTER = 'REGISTER',
    REGISTER_LOADING = 'REGISTER_LOADING'
}

export interface SetRegisterLoadingAction {
    type: RegisterActionTypes.REGISTER_LOADING;
    payload: { isRegisterLoading: boolean };
}

export interface SetRegisterAction {
    type: RegisterActionTypes.SET_REGISTER;
    payload: { fromRegister: boolean };
}

export interface RegisterPayload {
    login: string;
    name: string;
    date: string | Moment;
    position: string;
    password: string;
}

export interface RegisterAction {
    type: RegisterActionTypes.REGISTER;
    payload: RegisterPayload;
}

export type RegisterActions =
    | SetRegisterLoadingAction
    | SetRegisterAction
    | RegisterAction;
