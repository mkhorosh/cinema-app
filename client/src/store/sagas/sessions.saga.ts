import {
    DeleteSession,
    DELETE_SESSION,
    GET_SESSIONS
} from '../actions/sessions';
import { deleteSession, getSessions } from './api';
import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { setSessions } from '../actions/sessions.actions';

type DeleteResponse = SagaReturnType<typeof deleteSession>;
type ResponseGetSessions = SagaReturnType<typeof getSessions>;

function* deleteSessionSaga({ payload: { sessionKey } }: DeleteSession) {
    try {
        const response: DeleteResponse = yield call(deleteSession, sessionKey);

        if (response.status === 201) {
            // yield put(getSessions());
        }
    } catch (e) {
        console.log('error');
    }
}

function* getSessionsSaga() {
    try {
        let response: ResponseGetSessions = yield call(getSessions);
        if (response.status === 200) {
            const sessionsList = response.data.map((session) => {
                return {
                    ...session
                };
            });
            yield put(setSessions(sessionsList));
        }
    } catch (e) {
        console.log('error');
    }
}

export function* sessionsWatcher() {
    yield takeEvery(DELETE_SESSION, deleteSessionSaga);
    yield takeEvery(GET_SESSIONS, getSessionsSaga);
}
