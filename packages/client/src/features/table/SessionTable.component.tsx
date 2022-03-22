import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

// const dataSource = [
//     {
//         id: 1,
//         filmName: 'naruto',
//         filmDescription: 'string',
//         supervisor: 'Marina',
//         theatre: 'Орлёнок',
//         date: '2022-03-20T14:00',
//         duration: '01:20',
//         status: 'ok'
//     },
//     {
//         id: 2,
//         filmName: 'Spange bOb',
//         filmDescription: 'bifejkwhbkjejef fe wnf ewfnwjfujrgklfsd',
//         supervisor: 'Olesya',
//         theatre: 'Седьмое небо',
//         date: '2022-03-21T19:30',
//         duration: '01:45',
//         status: 'upgoing'
//     }
// ];

const columns = [
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
        key: 'supervisor'
    },
    {
        title: 'Локация',
        dataIndex: 'theatre',
        key: 'theatre'
    },
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date'
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
        render: (tag: string) => (
            <span>
                {tag === 'upgoing' ? (
                    <Tag color={'green'} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                ) : (
                    <Tag color={'volcano'} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                )}
            </span>
        )
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
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
