import { Space, Tag } from 'antd';
import { ColumnType } from 'antd/lib/table';
import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';
import { genres, theatres } from '../../common/constants';
import { Session } from '../../common/Session';
import { SessionIcon } from '../icon/SessionIcon.component';

export const columns: ColumnType<Session>[] = [
    {
        title: '',
        key: 'icon',
        dataIndex: 'genre',
        render: (tag: string) => {
            return <SessionIcon genre={tag} />;
        }
    },
    {
        title: 'Название',
        dataIndex: 'filmName',
        key: 'filmName'
    },
    {
        title: 'Описание',
        dataIndex: 'filmDescription',
        key: 'filmDescription'
    },
    {
        title: 'Ответственный',
        dataIndex: 'supervisor',
        key: 'supervisor',
        onFilter: (value: string | number | boolean, session: Session) =>
            session.supervisor === value
    },
    {
        title: 'Локация',
        dataIndex: 'theatre',
        key: 'theatre',
        filters: theatres.map((theatre: string) => {
            return {
                text: theatre,
                value: theatre
            };
        }),
        onFilter: (value: string | number | boolean, session: Session) =>
            session.theatre === value
    },
    {
        title: 'Дата Start',
        dataIndex: 'startDate',
        key: 'startDate',
        render: (startDate: string) => (
            <Space size="middle">
                {moment(startDate).locale('ru').format('D MMMM  YYYY')}
            </Space>
        ),
        sorter: (a: Session, b: Session) =>
            moment(a.startDate).isAfter(b.startDate) ? 1 : -1
    },
    {
        title: 'Дата End',
        dataIndex: 'endDate',
        key: 'endDate',
        render: (endDate: string) => (
            <Space size="middle">
                {moment(endDate).locale('ru').format('D MMMM  YYYY')}
            </Space>
        ),
        sorter: (a: Session, b: Session) =>
            moment(a.endDate).isAfter(b.endDate) ? 1 : -1
    },
    {
        title: 'Длительность',
        dataIndex: 'duration',
        key: 'duration'
    },
    {
        title: 'Жанр',
        key: 'genre',
        dataIndex: 'genre',
        render: (tag: string) => {
            return (
                <Tag color="default" key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        },
        filters: genres.map((state: string) => {
            return {
                text: state,
                value: state
            };
        }),
        onFilter: (value: string | number | boolean, session: Session) =>
            session.genre === value
    }
];
