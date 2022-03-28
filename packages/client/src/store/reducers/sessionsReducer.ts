import { Session } from '../../common/Session';
import { GET_SESSIONS, SessionActions } from '../actions/sessions.actions';

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
        case GET_SESSIONS:
            return {
                ...state,
                ...action
            };
        default:
            return state;
    }
}
