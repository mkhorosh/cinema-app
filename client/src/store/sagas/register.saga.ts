import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { RegisterAction, RegisterActionTypes } from '../actions/register.types';
import { setRegisterLoading } from '../actions/register.actions';
import { RegisterApi } from './register.api';

type RegisterResponse = SagaReturnType<typeof RegisterApi>;

function* RegisterSaga({ payload }: RegisterAction) {
    try {
        yield put(setRegisterLoading(true));
        const response: RegisterResponse = yield call(RegisterApi, payload);
        if (response.status === 200) {
            console.log('success register');
            yield put(setRegisterLoading(false));
        }
    } catch (e) {
        console.log(e);
        yield put(setRegisterLoading(false));
    }
}

export function* registerWatcher() {
    yield takeEvery(RegisterActionTypes.REGISTER, RegisterSaga);
}
