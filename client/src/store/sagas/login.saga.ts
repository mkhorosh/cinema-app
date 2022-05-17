import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { LoginAction, LoginActionTypes } from '../actions/login.types';
import { setLogin, setLoginLoading, setLogout } from '../actions/login.actions';
import { LoginApi } from './login.api';

type LoginResponse = SagaReturnType<typeof LoginApi>;

function* LoginSaga({ payload }: LoginAction) {
    try {
        yield put(setLoginLoading(true));
        const response: LoginResponse = yield call(LoginApi, payload);
        if (response.status === 200) {
            const { login, token } = response.data;
            console.log('success login' + login + token);
            yield put(setLogin(login, token));
            localStorage.setItem('USER_DATA', JSON.stringify({ login, token }));
            yield put(setLoginLoading(false));
        }
    } catch (e) {
        console.log(e);
        yield put(setLoginLoading(false));
    }
}

function* LogoutSaga() {
    try {
        yield put(setLogout());
        localStorage.removeItem('USER_DATA');
    } catch (e) {
        console.log(e);
    }
}

export function* loginWatcher() {
    yield takeEvery(LoginActionTypes.LOGIN_SEND, LoginSaga);
    yield takeEvery(LoginActionTypes.LOGOUT_SEND, LogoutSaga);
}
