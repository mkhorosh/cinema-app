import React, { FC, PropsWithChildren } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginContainer from '../features/auth/login/LoginContainer';
import RegisterContainer from '../features/auth/register/RegisterContainer';
import { Header } from '../features/header/Header.component';
import SessionTableContainer from '../features/table/SessionTableContainer';
import { RoutesAuthProps } from './RoutesAuth.types';

export const RoutesAuth: FC<RoutesAuthProps> = ({
    isAuth
}: PropsWithChildren<RoutesAuthProps>) => {
    if (isAuth) {
        return (
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <SessionTableContainer />
                        </>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        );
    }
    return (
        <Routes>
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};
