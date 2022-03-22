import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import moment, { Moment } from 'moment';
import { ColumnType } from 'antd/lib/table';

function deleteFromList(id: number | string) {
    console.log('delete' + id);
}
interface Session {
    id: number;
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    date: string | Moment;
    duration: string;
    status: string;
}

const columns: ColumnType<Session>[] = [
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
        //     <Space size="middle">{moment(date, 'YYYY-MM-DD')}</Space>
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
            if (tag === 'ожидается') {
                color = 'blue';
            } else if (tag === 'идёт') {
                color = 'green';
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
    },
    {
        title: 'Action',
        key: 'action',
        render: (session: Session) => (
            <Space size="middle">
                <a>Edit</a>
                <a onClick={() => deleteFromList(session.id)}>Delete</a>
            </Space>
        )
    }
];

export const SessionTable = () => {
    const [sessionList, setSessionList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/').then((response) => {
            setSessionList(response.data);
        });
    }, [sessionList]);

    return (
        <div>
            <Table dataSource={sessionList} columns={columns} rowKey="_id" />
        </div>
    );
};
