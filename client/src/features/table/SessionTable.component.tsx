import React, { FC, useState } from 'react';
import { Form, Modal, Space, Table } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Session } from '../../common/Session';
import { columns } from './columns';
import { SessionTableProps } from './SessionTable.types';
import SessionModal from '../modal/SessionModal.component';
import { Loader } from '../Loader.component';

const { confirm } = Modal;

export const SessionTable: FC<SessionTableProps> = ({
    sessions,
    users,
    isLoading,
    deleteSession
}) => {
    const showDeleteConfirm = (id: string) => {
        confirm({
            title: 'Вы действительно хотите удалить эту запись?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Да',
            okType: 'danger',
            cancelText: 'Отмена',
            onOk() {
                deleteSession(id);
            }
        });
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [sessionForEdit, setSessionForEdit] = useState<Session>();

    const [form] = Form.useForm();

    const tableColumns: ColumnType<Session>[] = [
        ...columns,
        {
            title: '',
            key: 'edit',
            render: (session: Session) => (
                <>
                    <Space size="middle">
                        <button
                            onClick={() => {
                                console.log('edit' + session);
                                setSessionForEdit(session);
                                setIsModalVisible(true);
                            }}
                        >
                            Изменить
                        </button>
                    </Space>
                </>
            )
        },
        {
            title: '',
            key: 'delete',
            render: (session: Session) => (
                <Space size="middle">
                    <button onClick={() => showDeleteConfirm(session.id)}>
                        Удалить
                    </button>
                </Space>
            )
        }
    ];

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Table dataSource={sessions} columns={tableColumns} rowKey="id" />
            <SessionModal
                showModal={isModalVisible}
                onClose={() => {
                    setIsModalVisible(false);
                    form.resetFields();
                }}
                type="EDIT"
                sessionInfo={sessionForEdit}
                form={form}
                users={users}
            />
        </>
    );
};
