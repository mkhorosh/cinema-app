import { message } from 'antd';
import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { setLogin, setLogout, setUsers } from '../actions/users.actions';
import {
    LoginAction,
    RegisterAction,
    UsersActionTypes
} from '../actions/users.types';
import { getUsersApi, LoginApi, RegisterApi } from './api';

type GetUsersResponse = SagaReturnType<typeof getUsersApi>;
type LoginResponse = SagaReturnType<typeof LoginApi>;
type RegisterResponse = SagaReturnType<typeof RegisterApi>;

function* getUsersSaga() {
    try {
        const response: GetUsersResponse = yield call(getUsersApi);
        if (response.status === 200) {
            yield put(setUsers(response.data));
        }
    } catch (e) {
        message.error((e as Error).message);
        console.log(e);
    }
}

function* LoginSaga({ payload }: LoginAction) {
    const hide = message.loading('Загрузка...', 0);
    try {
        const response: LoginResponse = yield call(LoginApi, payload);
        if (response.status === 200) {
            const { login, token } = response.data;
            hide();
            message.success('успешный вход', 1);
            yield put(setLogin(login, token));
            localStorage.setItem('USER_DATA', JSON.stringify({ login, token }));
        }
    } catch (e) {
        hide();
        message.error('неудачный вход');
        console.log(e);
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

function* RegisterSaga({ payload }: RegisterAction) {
    const hide = message.loading('Загрузка...', 0);
    try {
        const response: RegisterResponse = yield call(RegisterApi, payload);
        if (response.status === 200) {
            hide();
            message.success('успешная регистрация', 1);
        }
    } catch (e) {
        hide();
        message.error('проблема регистрации');
        console.log(e);
    }
}

export function* usersWatcher() {
    yield takeEvery(UsersActionTypes.GET_USERS, getUsersSaga);
    yield takeEvery(UsersActionTypes.LOGIN_SEND, LoginSaga);
    yield takeEvery(UsersActionTypes.LOGOUT_SEND, LogoutSaga);
    yield takeEvery(UsersActionTypes.REGISTER, RegisterSaga);
}
