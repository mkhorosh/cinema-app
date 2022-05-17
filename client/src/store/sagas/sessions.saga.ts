import {
    deleteSessionApi,
    getSessionsApi,
    editSessionApi,
    createSessionApi,
    getUsersApi
} from './sessions.api';
import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import {
    CreateSessionAction,
    DeleteSessionAction,
    EditSessionAction,
    SessionsActionTypes
} from '../actions/sessions.types';
import {
    getSessions,
    setLoading,
    setSessions,
    setUsers
} from '../actions/sessions.actions';

type DeleteResponse = SagaReturnType<typeof deleteSessionApi>;
type GetSessionsResponse = SagaReturnType<typeof getSessionsApi>;
type GetUsersResponse = SagaReturnType<typeof getUsersApi>;
type EditSessionResponse = SagaReturnType<typeof editSessionApi>;
type CreateSessionResponse = SagaReturnType<typeof createSessionApi>;

function* deleteSessionSaga({ payload }: DeleteSessionAction) {
    try {
        yield put(setLoading(true));
        const response: DeleteResponse = yield call(deleteSessionApi, payload);
        if (response.status === 200) {
            console.log('deleting success');
            yield put(getSessions());
        }
    } catch (e) {
        console.log(e);
        yield put(setLoading(false));
    }
}

function* getSessionsSaga() {
    try {
        yield put(setLoading(true));
        const response: GetSessionsResponse = yield call(getSessionsApi);
        if (response.status === 200) {
            yield put(setSessions(response.data));
            yield put(setLoading(false));
        }
    } catch (e) {
        console.log(e);
        yield put(setLoading(false));
    }
}

function* getUsersSaga() {
    try {
        const response: GetUsersResponse = yield call(getUsersApi);
        if (response.status === 200) {
            yield put(setUsers(response.data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* editSessionSaga({ payload }: EditSessionAction) {
    try {
        yield put(setLoading(true));
        const response: EditSessionResponse = yield call(
            editSessionApi,
            payload
        );
        if (response.status === 200) {
            yield put(getSessions());
        }
    } catch (e) {
        console.log(e);
        yield put(setLoading(false));
    }
}

function* createSessionSaga({ payload }: CreateSessionAction) {
    try {
        yield put(setLoading(true));
        const response: CreateSessionResponse = yield call(
            createSessionApi,
            payload
        );
        if (response.status === 200) {
            yield put(getSessions());
        }
    } catch (e) {
        console.log(e);
        yield put(setLoading(false));
    }
}

export function* sessionsWatcher() {
    yield takeEvery(SessionsActionTypes.DELETE_SESSION, deleteSessionSaga);
    yield takeEvery(SessionsActionTypes.GET_SESSIONS, getSessionsSaga);
    yield takeEvery(SessionsActionTypes.GET_USERS, getUsersSaga);
    yield takeEvery(SessionsActionTypes.EDIT_SESSION, editSessionSaga);
    yield takeEvery(SessionsActionTypes.CREATE_SESSION, createSessionSaga);
}
