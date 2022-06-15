import { Button, DatePicker, Form, Input, Select } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { positionOptions } from './Register.constants';
import { RegisterProps } from './Register.types';

export const Register: FC<RegisterProps> = ({ onFinish }) => {
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
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Введите ФИО!'
                    },
                    {
                        pattern: /^[a-zA-Zа-яА-Я\s]*$/,
                        message: 'ФИО не должны содержать цифр и спецсимволы!'
                    }
                ]}
            >
                <Input placeholder="ФИО" />
            </Form.Item>
            <Form.Item name="date">
                <DatePicker />
            </Form.Item>
            <Form.Item name="position">
                <Select
                    options={positionOptions}
                    placeholder="Выберите должность"
                />
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
                    Зарегистрироваться
                </Button>
            </Form.Item>
            <Link to="/login">Войти</Link>
        </Form>
    );
};
