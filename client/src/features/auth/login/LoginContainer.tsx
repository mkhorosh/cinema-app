import React, { FC, PropsWithChildren, useCallback } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../../store/actions/users.actions';
import { Login } from './Login.component';
import { LoginContainerProps, UserData } from './Login.types';

const LoginContainer: FC<LoginContainerProps> = ({
    loginAction
}: PropsWithChildren<LoginContainerProps>) => {
    const onFinish = useCallback(
        (values: UserData): void => {
            loginAction({ ...values });
        },
        [loginAction]
    );
    return (
        <>
            <h1>Вход</h1>
            <Login onFinish={onFinish} />
        </>
    );
};

export default connect(null, {
    loginAction: logIn
})(LoginContainer);
