import {
    SessionsAction,
    SessionsActionTypes,
    SessionsState
} from '../actions/sessions';

const initState: SessionsState = {
    sessions: []
};

export const sessionsReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state = initState,
    action: SessionsAction
): SessionsState => {
    switch (action.type) {
        case SessionsActionTypes.SET_SESSIONS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
