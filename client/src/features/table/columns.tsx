import {
    QuestionOutlined,
    UpCircleOutlined,
    RightCircleOutlined,
    DownCircleOutlined
} from '@ant-design/icons';
import { Tag } from 'antd';
import { ColumnType } from 'antd/lib/table';
import moment from 'moment';
import React from 'react';
import { Session } from '../../common/Session';

export const columns: ColumnType<Session>[] = [
    {
        title: '',
        key: 'icon',
        dataIndex: 'status',
        render: (tag: string) => {
            let icon: JSX.Element = <QuestionOutlined />;
            switch (tag) {
                case 'ожидается':
                    icon = <UpCircleOutlined />;
                    break;
                case 'идёт':
                    icon = <RightCircleOutlined />;
                    break;
                default:
                    icon = <DownCircleOutlined />;
            }
            return <>{icon}</>;
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
        // render: (date: string) => (
        //     <Space size="middle">{new Date(date).toISOString}</Space>
        // ),
        sorter: (a: Session, b: Session) =>
            moment(a.date).isAfter(b.date) ? 1 : -1
    },
    {
        title: 'Длительность',
        dataIndex: 'duration',
        key: 'duration'
    },
    {
        title: 'Статус',
        key: 'status',
        dataIndex: 'status',
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
            session.status === value
    }
];
