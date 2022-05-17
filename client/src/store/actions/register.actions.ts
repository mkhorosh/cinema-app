import {
    RegisterAction,
    RegisterActionTypes,
    RegisterPayload,
    SetRegisterAction,
    SetRegisterLoadingAction
} from './register.types';

export const setRegisterLoading = (
    isRegisterLoading: boolean
): SetRegisterLoadingAction => ({
    type: RegisterActionTypes.REGISTER_LOADING,
    payload: { isRegisterLoading }
});

export const setRegister = (fromRegister: boolean): SetRegisterAction => ({
    type: RegisterActionTypes.SET_REGISTER,
    payload: { fromRegister }
});

export const register = ({
    login,
    name,
    date,
    position,
    password
}: RegisterPayload): RegisterAction => ({
    type: RegisterActionTypes.REGISTER,
    payload: { login, name, date, position, password }
});
