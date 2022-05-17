import { Button, DatePicker, Form, Input, Select } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../../Loader.component';
import { positionOptions } from './Register.constants';
import { RegisterProps } from './Register.types';

export const Register: FC<RegisterProps> = ({ isLoading, onFinish }) => {
    if (isLoading) {
        return <Loader />;
    }
    return (
        <Form onFinish={onFinish}>
            <Form.Item name="login">
                <Input placeholder="Login" />
            </Form.Item>
            <Form.Item name="name">
                <Input placeholder="name" />
            </Form.Item>
            <Form.Item name="date">
                <DatePicker />
            </Form.Item>
            <Form.Item name="position">
                <Select options={positionOptions} />
            </Form.Item>
            <Form.Item name="password">
                <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Зарегистрироваться
                </Button>
            </Form.Item>
            <Link to="/login">login now!</Link>
        </Form>
    );
};
