import React, { FC, PropsWithChildren, useCallback } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../../store/actions/login.actions';
import { RootState } from '../../../store/reducers/rootReducer';
import { Login } from './Login.component';
import { LoginContainerProps, UserData } from './LoginContainer.types';

export const LoginContainer: FC<LoginContainerProps> = ({
    isLoading,
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
            <h1>Login</h1>
            <Login isLoading={isLoading} onFinish={onFinish} />
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    isLoading: state.login.isLoginLoading
});

export default connect(mapStateToProps, {
    loginAction: logIn
})(LoginContainer);
