import { all } from 'redux-saga/effects';
import { sessionsWatcher } from './sessions.saga';
import { usersWatcher } from './users.saga';

export function* rootWatcher() {
    yield all([sessionsWatcher(), usersWatcher()]);
}
