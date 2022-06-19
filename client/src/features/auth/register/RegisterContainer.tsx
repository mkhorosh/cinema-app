import React, { FC, PropsWithChildren, useCallback } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../store/actions/users.actions';
import { Register } from './Register.component';
import { RegisterContainerProps, RegisterData } from './Register.types';

const RegisterContainer: FC<RegisterContainerProps> = ({
    registerAction
}: PropsWithChildren<RegisterContainerProps>) => {
    const onFinish = useCallback(
        (values: RegisterData): void => {
            registerAction({
                ...values
            });
        },
        [registerAction]
    );
    return (
        <>
            <h1>Регистрация</h1>
            <Register onFinish={onFinish} />
        </>
    );
};

export default connect(null, { registerAction: register })(RegisterContainer);
