import { all } from 'redux-saga/effects';
import { sessionsWatcher } from './sessions.saga';

export function* rootWatcher() {
    yield all([sessionsWatcher()]);
}
