import { combineReducers } from 'redux';
import { sessionsReducer } from './sessionsReducer';
import { usersReducer } from './usersReduser';

export const rootReducer = combineReducers({
    sessions: sessionsReducer,
    users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>;
