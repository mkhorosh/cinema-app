import {
    RegisterActions,
    RegisterActionTypes,
    RegisterState
} from '../actions/register.types';

const initState: RegisterState = {
    fromRegister: false,
    isRegisterLoading: false
};

export const registerReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state = initState,
    action: RegisterActions
): RegisterState => {
    switch (action.type) {
        case RegisterActionTypes.SET_REGISTER:
            return { ...state, ...action.payload };
        case RegisterActionTypes.REGISTER_LOADING:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
