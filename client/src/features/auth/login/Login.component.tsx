import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../../Loader.component';
import { LoginProps } from './Login.types';

export const Login: FC<LoginProps> = ({ isLoading, onFinish }) => {
    if (isLoading) {
        return <Loader />;
    }
    return (
        <Form onFinish={onFinish}>
            <Form.Item
                name="login"
                rules={[
                    {
                        required: true,
                        message: 'Please input your login'
                    }
                ]}
            >
                <Input placeholder="Логин" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password'
                    }
                ]}
            >
                <Input.Password placeholder="Пароль" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Вход
                </Button>
            </Form.Item>
            <Link to="/register">register now!</Link>
        </Form>
    );
};
