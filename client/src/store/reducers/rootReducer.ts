import { combineReducers } from 'redux';
import { loginReducer } from './login.Reducer';
import { registerReducer } from './register.Reducer';
import { sessionsReducer } from './sessionsReducer';

export const rootReducer = combineReducers({
    sessions: sessionsReducer,
    login: loginReducer,
    register: registerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
