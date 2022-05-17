import {
    LoginActions,
    LoginActionTypes,
    LoginState
} from '../actions/login.types';

const initState: LoginState = {
    login: null,
    token: null,
    isLoginLoading: false
};

export const loginReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state = initState,
    action: LoginActions
): LoginState => {
    switch (action.type) {
        case LoginActionTypes.LOGIN_LOADING:
            return { ...state, ...action.payload };
        case LoginActionTypes.SET_LOGIN:
            return { ...state, ...action.payload };
        case LoginActionTypes.SET_LOGOUT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
