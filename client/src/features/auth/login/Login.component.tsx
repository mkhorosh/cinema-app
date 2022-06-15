import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LoginProps } from './Login.types';

export const Login: FC<LoginProps> = ({ onFinish }) => {
    return (
        <Form onFinish={onFinish}>
            <Form.Item
                name="login"
                rules={[
                    {
                        required: true,
                        message: 'Укажите логин!'
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
                        message: 'Укажите пароль!'
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
            <Link to="/register">Зарегистрироваться</Link>
        </Form>
    );
};
