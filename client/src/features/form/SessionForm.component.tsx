import { Button, Form, Input, Select } from 'antd';
import React from 'react';

export const SessionForm = () => {
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
        >
            <Form.Item label="Название">
                <Input />
            </Form.Item>
            <Form.Item label="Описание">
                <Input />
            </Form.Item>
            <Form.Item label="Ответственный">
                <Select>
                    <Select.Option value="marina">
                        Хорошилова Марина
                    </Select.Option>
                    <Select.Option value="olesya">Сергеева Олеся</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Локация">
                <Select>
                    <Select.Option value="location1">
                        Седьмое небо
                    </Select.Option>
                    <Select.Option value="location2">Небо</Select.Option>
                    <Select.Option value="location3">Орлёнок</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Дата">
                <Input />
            </Form.Item>
            <Form.Item label="Статус">
                <Select>
                    <Select.Option value="pending">ожидается</Select.Option>
                    <Select.Option value="in_progress">идёт</Select.Option>
                    <Select.Option value="passed">прошёл</Select.Option>
                </Select>
            </Form.Item>
            <Button onClick={() => console.log('create button')}>
                Создать
            </Button>
        </Form>
    );
};
