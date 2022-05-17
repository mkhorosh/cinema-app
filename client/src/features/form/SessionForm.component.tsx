import { Button, DatePicker, Form, Input, Select, TimePicker } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import React, { FC, useEffect } from 'react';
import { User } from '../../common/User';
import { statusOptions, theatresOptions } from './SessionForm.constants';
import { SessionFormProps } from './SessionForm.types';

export const SessionForm: FC<SessionFormProps> = ({
    sessionInfo,
    handleFormSubmit,
    form,
    users
}) => {
    useEffect(() => {
        sessionInfo
            ? form.setFieldsValue({
                  ...sessionInfo,
                  duration: moment(sessionInfo.duration, 'HH:mm'),
                  date: moment(sessionInfo.date)
              })
            : form.setFieldsValue({
                  filmName: '',
                  filmDescription: '',
                  supervisor: '',
                  theatre: '',
                  date: moment(),
                  duration: '',
                  genre: ''
              });
    }, [form, sessionInfo]);

    const usersOptions = users.map((user: User) => {
        return {
            label: user.fullName,
            value: user.fullName
        };
    });

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={handleFormSubmit}
            form={form}
        >
            <Form.Item
                label="Название"
                name="filmName"
                rules={[
                    {
                        required: true,
                        message: 'Введите название!'
                    },
                    {
                        max: 35,
                        message: 'Название слишком длинное'
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Описание"
                name="filmDescription"
                rules={[
                    {
                        required: true,
                        message: 'Укажите описание!'
                    }
                ]}
            >
                <TextArea />
            </Form.Item>
            <Form.Item label="Ответственный" name="supervisor">
                <Select placeholder="Select assigner" options={usersOptions} />
            </Form.Item>
            <Form.Item
                label="Локация"
                name="theatre"
                rules={[
                    {
                        required: true,
                        message: 'Выберите локацию!'
                    }
                ]}
            >
                <Select
                    placeholder="Select theatre"
                    options={theatresOptions}
                />
            </Form.Item>
            <Form.Item
                label="Дата и время"
                name="date"
                rules={[
                    {
                        required: true,
                        message: 'Укажите время сеанса!'
                    }
                ]}
            >
                <DatePicker
                    format="YYYY-MM-DD HH:mm"
                    hideDisabledOptions
                    disabled
                    showTime={{ defaultValue: moment('00:00', 'HH:mm') }}
                />
            </Form.Item>

            <Form.Item
                label="Длительность"
                name="duration"
                rules={[
                    {
                        required: true,
                        message: 'Укажите длительность!'
                    }
                ]}
            >
                <TimePicker format="HH:mm" />
            </Form.Item>

            <Form.Item
                label="Жанр"
                name="genre"
                rules={[
                    {
                        required: true,
                        message: 'Выберите жанр!'
                    }
                ]}
            >
                <Select options={statusOptions} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
