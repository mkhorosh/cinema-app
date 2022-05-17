import { PushpinOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';
import { ColumnType } from 'antd/lib/table';
import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';
import { Session } from '../../common/Session';

export const columns: ColumnType<Session>[] = [
    {
        title: '',
        key: 'icon',
        dataIndex: 'genre',
        render: (tag: string) => {
            let color = '';

            switch (tag) {
                case 'детектив':
                    color = 'red';
                    break;
                case 'драма':
                    color = 'orange';
                    break;
                case 'триллер':
                    color = 'yellow';
                    break;
                case 'ужасы':
                    color = 'green';
                    break;
                case 'боевик':
                    color = 'blue';
                    break;
                case 'приключения':
                    color = 'purple';
                    break;
                case 'мелодрама':
                    color = 'pink';
                    break;
                case 'комедия':
                    color = 'cian';
                    break;
                default:
                    break;
            }

            return <PushpinOutlined style={{ color, fontSize: '20px' }} />;
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
        filters: [
            {
                text: 'Хорошилова Марина',
                value: 'Хорошилова Марина'
            },
            {
                text: 'Сергеева Олеся',
                value: 'Сергеева Олеся'
            }
        ],
        onFilter: (value: string | number | boolean, session: Session) =>
            session.supervisor === value
    },
    {
        title: 'Локация',
        dataIndex: 'theatre',
        key: 'theatre',
        filters: [
            {
                text: 'Орлёнок',
                value: 'Орлёнок'
            },
            {
                text: 'Седьмое небо',
                value: 'Седьмое небо'
            },
            {
                text: 'Небо',
                value: 'Небо'
            }
        ],
        onFilter: (value: string | number | boolean, session: Session) =>
            session.theatre === value
    },
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        render: (date: string) => (
            <Space size="middle">
                {moment(date).locale('ru').format('dddd, MMMM Do YYYY')}
            </Space>
        ),
        sorter: (a: Session, b: Session) =>
            moment(a.date).isAfter(b.date) ? 1 : -1
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
            let color = 'default';
            switch (tag) {
                case 'ожидается':
                    color = 'blue';
                    break;
                case 'идёт':
                    color = 'green';
                    break;
                default:
                    color = 'default';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        },
        filters: [
            {
                text: 'прошёл',
                value: 'прошёл'
            },
            {
                text: 'идёт',
                value: 'идёт'
            },
            {
                text: 'ожидается',
                value: 'ожидается'
            }
        ],
        onFilter: (value: string | number | boolean, session: Session) =>
            session.genre === value
    }
];
