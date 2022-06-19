import { Button, DatePicker, Form, Input, Select, TimePicker } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment, { Moment } from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { User } from '../../common/User';
import { SessionIcon } from '../icon/SessionIcon.component';
import { genres, theatres } from '../../common/constants';
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
                  startDate: moment(sessionInfo.startDate),
                  endDate: moment(sessionInfo.endDate)
              })
            : form.setFieldsValue({
                  filmName: '',
                  filmDescription: '',
                  supervisor: '',
                  theatre: '',
                  startDate: moment(),
                  endDate: '',
                  duration: '',
                  genre: ''
              });
    }, [form, sessionInfo]);

    const usersOptions = users.map((user: User) => ({
        label: user.name,
        value: user.name
    }));

    const disabledDate = (currentDate: Moment) =>
        currentDate && currentDate < moment().startOf('day');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [iconGenre, setIconGenre] = useState(
        sessionInfo ? sessionInfo.genre : ''
    );

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            onFinish={handleFormSubmit}
            form={form}
        >
            {/* <Form.Item label="id" name="id" style={{ display: 'none' }}>
                <Input />
            </Form.Item> */}
            <Form.Item label="Иконка" name="icon">
                <SessionIcon genre={iconGenre} />
            </Form.Item>
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
                <Select
                    placeholder="Выберите ответственного"
                    options={usersOptions}
                />
            </Form.Item>
            <Form.Item
                label="Локация"
                name="theatre"
                rules={[
                    {
                        required: true,
                        message: 'Укажите локацию!'
                    }
                ]}
            >
                <Select
                    placeholder="Выберите локацию"
                    options={theatres.map((theatre: string) => {
                        return {
                            label: theatre,
                            value: theatre
                        };
                    })}
                />
            </Form.Item>
            <Form.Item
                label="Дата"
                name="startDate"
                rules={[
                    {
                        required: true,
                        message: 'Укажите время сеанса!'
                    }
                ]}
            >
                <DatePicker format="YYYY-MM-DD" hideDisabledOptions />
            </Form.Item>

            <Form.Item
                label="Дата 2"
                name="endDate"
                rules={[
                    {
                        required: true,
                        message: 'Укажите время сеанса!'
                    }
                ]}
            >
                <DatePicker
                    format="YYYY-MM-DD"
                    hideDisabledOptions
                    disabledDate={disabledDate}
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
                        message: 'Укажите жанр!'
                    }
                ]}
            >
                <Select
                    placeholder="Выберите жанр"
                    options={genres.map((state: string) => {
                        return {
                            label: state,
                            value: state
                        };
                    })}
                    onChange={(value: string) => setIconGenre(value)}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Готово
                </Button>
            </Form.Item>
        </Form>
    );
};
