import React, { FC } from 'react';
import { Modal, Space, Table } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Session } from '../../common/Session';
import { columns } from './columns';
import { SessionTableProps } from './SessionTable.props';

const { confirm } = Modal;

export const SessionTable: FC<SessionTableProps> = ({
    sessionList,
    deleteSession,
    editSession
}) => {
    const showDeleteConfirm = (id: string) => {
        confirm({
            title: 'Вы действительно хотите удалить эту запись?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Да',
            okType: 'danger',
            cancelText: 'Отмена',
            onOk() {
                try {
                    deleteSession(id);
                } catch (e) {
                    console.log(e);
                }
            },
            onCancel() {
                console.log('Cancel');
            }
        });
    };

    const showEditSessionModal = (session: Session) => {
        editSession(session);
    };

    const tableColumns: ColumnType<Session>[] = [
        ...columns,
        {
            title: '',
            key: 'edit',
            render: (session: Session) => (
                <Space size="middle">
                    <button onClick={() => showEditSessionModal(session)}>
                        Edit
                    </button>
                </Space>
            )
        },
        {
            title: '',
            key: 'delete',
            render: (session: Session) => (
                <Space size="middle">
                    <button onClick={() => showDeleteConfirm(session._id)}>
                        Delete
                    </button>
                </Space>
            )
        }
    ];

    return (
        <Table dataSource={sessionList} columns={tableColumns} rowKey="_id" />
    );
};
