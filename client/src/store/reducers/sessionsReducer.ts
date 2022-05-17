import {
    SessionsAction,
    SessionsActionTypes,
    SessionsState
} from '../actions/sessions.types';

const initState: SessionsState = {
    sessionsList: [],
    isLoading: false,
    users: []
};

export const sessionsReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state = initState,
    action: SessionsAction
): SessionsState => {
    switch (action.type) {
        case SessionsActionTypes.SET_SESSIONS:
            return { ...state, ...action.payload };
        case SessionsActionTypes.SET_USERS:
            return { ...state, ...action.payload };
        case SessionsActionTypes.SESSIONS_LOADING:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
