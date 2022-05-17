import React, { FC, PropsWithChildren, useCallback } from 'react';
import { connect } from 'react-redux';
import { register } from '../../../store/actions/register.actions';
import { RootState } from '../../../store/reducers/rootReducer';
import { Register } from './Register.component';
import {
    RegisterContainerProps,
    RegisterData
} from './RegisterContainer.types';

export const RegisterContainer: FC<RegisterContainerProps> = ({
    isLoading,
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
            <h1>register</h1>
            <Register isLoading={isLoading} onFinish={onFinish} />
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    isLoading: state.register.isRegisterLoading
});

export default connect(mapStateToProps, { registerAction: register })(
    RegisterContainer
);
