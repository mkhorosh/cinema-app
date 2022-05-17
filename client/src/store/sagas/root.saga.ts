import { all } from 'redux-saga/effects';
import { loginWatcher } from './login.saga';
import { registerWatcher } from './register.saga';
import { sessionsWatcher } from './sessions.saga';

export function* rootWatcher() {
    yield all([sessionsWatcher(), loginWatcher(), registerWatcher()]);
}
