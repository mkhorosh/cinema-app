import { Session } from '../../common/Session';
import { SET_SESSIONS } from '../actions/sessions';
import { SessionActions } from '../actions/sessions.actions';

interface SessionsInitState {
    sessionsList: Session[];
}

const initState: SessionsInitState = {
    sessionsList: [] as Session[]
};

export function sessionsReducer(
    action: SessionActions,
    state = initState
): SessionsInitState {
    switch (action.type) {
        case SET_SESSIONS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
