import {
    UsersActions,
    UsersActionTypes,
    UsersState
} from '../actions/users.types';

const initState: UsersState = {
    users: [],
    login: null,
    token: null
};

export const usersReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state = initState,
    action: UsersActions
): UsersState => {
    switch (action.type) {
        case UsersActionTypes.SET_USERS:
            return { ...state, ...action.payload };
        case UsersActionTypes.SET_LOGIN:
            return { ...state, ...action.payload };
        case UsersActionTypes.SET_LOGOUT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
