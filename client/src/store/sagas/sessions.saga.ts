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
} from '../actions/sessions.types';
import {
    getSessions,
    setLoading,
    setSessions
} from '../actions/sessions.actions';
import { message } from 'antd';

type DeleteResponse = SagaReturnType<typeof deleteSessionApi>;
type GetSessionsResponse = SagaReturnType<typeof getSessionsApi>;
type EditSessionResponse = SagaReturnType<typeof editSessionApi>;
type CreateSessionResponse = SagaReturnType<typeof createSessionApi>;

function* deleteSessionSaga({ payload }: DeleteSessionAction) {
    try {
        yield put(setLoading(true));
        const response: DeleteResponse = yield call(deleteSessionApi, payload);
        if (response.status === 200) {
            message.success('запись удалена');
            yield put(getSessions());
        }
    } catch (e) {
        message.error('проблемы с удалением записи');
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

function* editSessionSaga({ payload }: EditSessionAction) {
    try {
        yield put(setLoading(true));
        const response: EditSessionResponse = yield call(
            editSessionApi,
            payload
        );
        if (response.status === 200) {
            message.success('запись отредактирована');
            yield put(getSessions());
        }
    } catch (e) {
        message.error('проблемы с редактированием записи');
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
            message.success('запись создана');
            yield put(getSessions());
        }
    } catch (e) {
        message.error('проблемы с созданием записи');
        console.log(e);
        yield put(setLoading(false));
    }
}

export function* sessionsWatcher() {
    yield takeEvery(SessionsActionTypes.DELETE_SESSION, deleteSessionSaga);
    yield takeEvery(SessionsActionTypes.GET_SESSIONS, getSessionsSaga);
    yield takeEvery(SessionsActionTypes.EDIT_SESSION, editSessionSaga);
    yield takeEvery(SessionsActionTypes.CREATE_SESSION, createSessionSaga);
}
