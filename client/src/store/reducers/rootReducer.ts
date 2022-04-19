import { combineReducers } from 'redux';
import { sessionsReducer } from './sessionsReducer';

export const rootReducer = combineReducers({
    sessions: sessionsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
