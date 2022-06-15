import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Avatar, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { RoutesAuth } from './RoutesAuth.component';
import { RootState } from '../store/reducers/rootReducer';
import { connect } from 'react-redux';
import { logOut, setLogin } from '../store/actions/users.actions';
import { AppProps } from './App.types';

export const App: FC<AppProps> = ({
    isAuth,
    setLoginAction,
    logoutAction
}: PropsWithChildren<AppProps>) => {
    useEffect(() => {
        const data: string | null = localStorage.getItem('USER_DATA');
        if (data) {
            let dataObject = JSON.parse(data);
            setLoginAction(dataObject.login, dataObject.token);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Layout>
            <Layout.Header>
                <Menu mode="horizontal" theme={'dark'}>
                    {isAuth && (
                        <Menu.Item key="2" onClick={logoutAction}>
                            <Avatar icon={<UserOutlined />} /> Выйти
                        </Menu.Item>
                    )}
                </Menu>
            </Layout.Header>
            <Layout.Content>
                <RoutesAuth isAuth={isAuth} />
            </Layout.Content>
            <Layout.Footer>cinema-app 2022 created by mkhorosh</Layout.Footer>
        </Layout>
    );
};

const mapStateToProps = (state: RootState) => ({
    isAuth: state.users.login ? true : false
});

export default connect(mapStateToProps, {
    setLoginAction: setLogin,
    logoutAction: logOut
})(App);
