import React, { useEffect, useState } from 'react';
import { Modal, Space, Table, Tag } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { ColumnType } from 'antd/lib/table';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Session } from '../../common/Session';

const { confirm } = Modal;

function showDeleteConfirm(id: string) {
    confirm({
        title: 'Are you sure delete this task?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            console.log('OK');
            axios.delete(`http://localhost:3003/delete/${id}`);
        },
        onCancel() {
            console.log('Cancel');
        }
    });
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
                <a onClick={() => console.log('edit' + session)}>Edit</a>
                <a onClick={() => showDeleteConfirm(session._id)}>Delete</a>
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
