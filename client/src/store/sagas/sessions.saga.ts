import {
    deleteSessionApi,
    getSessionsApi,
    editSessionApi,
    createSessionApi
} from './api';
import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import {
    CreateSessionAction,
    DeleteSessionAction,
    EditSessionAction,
    SessionsActionTypes
} from '../actions/sessions';
import { getSessions, setSessions } from '../actions/sessions.actions';

type DeleteResponse = SagaReturnType<typeof deleteSessionApi>;
type GetSessionsResponse = SagaReturnType<typeof getSessionsApi>;
type EditSessionResponse = SagaReturnType<typeof editSessionApi>;
type CreateSessionResponse = SagaReturnType<typeof createSessionApi>;

function* deleteSessionSaga({ payload }: DeleteSessionAction) {
    try {
        const response: DeleteResponse = yield call(
            deleteSessionApi,
            payload.sessionKey
        );
        if (response.status === 201) {
            console.log('deleting success');
            yield put(getSessions());
        }
    } catch (e) {
        console.log(e);
    }
}

function* getSessionsSaga() {
    try {
        const response: GetSessionsResponse = yield call(getSessionsApi);
        if (response.status === 200) {
            yield put(setSessions(response.data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* editSessionSaga({ payload }: EditSessionAction) {
    try {
        const response: EditSessionResponse = yield call(
            editSessionApi,
            payload.newSession
        );
        if (response.status === 200) {
            yield put(getSessions());
        }
    } catch (e) {
        console.log(e);
    }
}

function* createSessionSaga({ payload }: CreateSessionAction) {
    try {
        const response: CreateSessionResponse = yield call(
            createSessionApi,
            payload.newSession
        );
        if (response.status === 200) {
            yield put(getSessions());
        }
    } catch (e) {
        console.log(e);
    }
}

export function* sessionsWatcher() {
    yield takeEvery(SessionsActionTypes.DELETE_SESSION, deleteSessionSaga);
    yield takeEvery(SessionsActionTypes.GET_SESSIONS, getSessionsSaga);
    yield takeEvery(SessionsActionTypes.EDIT_SESSION, editSessionSaga);
    yield takeEvery(SessionsActionTypes.CREATE_SESSION, createSessionSaga);
}
