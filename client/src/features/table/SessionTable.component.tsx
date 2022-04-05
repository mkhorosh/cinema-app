import React, { FC, useEffect } from 'react';
import { Modal, Space, Table } from 'antd';
import { ColumnType } from 'antd/lib/table';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Session } from '../../common/Session';
import { columns } from './columns';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    deleteSession,
    getSessions,
    SessionActions
} from '../../store/actions/sessions.actions';
import { SessionTableProps } from './SessionTable.props';
import { Dispatch } from 'redux';
import { rootReducer } from '../../store/reducers/rootReducer';

const { confirm } = Modal;

export const SessionTable: FC<SessionTableProps> = ({
    dispatchDeleteSession
}) => {
    const { sessionList } = useSelector(
        ({ sessionsReducer }: typeof rootReducer) => sessionsReducer
    );
    const dispatch = useDispatch<Dispatch<SessionActions>>();
    useEffect(() => {
        dispatch(getSessions());
    }, [sessionList]);

    function showDeleteConfirm(id: string) {
        confirm({
            title: 'Вы действительно хотите удалить эту запись?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Да',
            okType: 'danger',
            cancelText: 'Отмена',
            onOk() {
                console.log('OK');
                if (dispatchDeleteSession) {
                    dispatchDeleteSession(id);
                }
            },
            onCancel() {
                console.log('Cancel');
            }
        });
    }

    const tableColumns: ColumnType<Session>[] = [
        ...columns,
        {
            title: '',
            key: 'edit',
            render: (session: Session) => (
                <Space size="middle">
                    <button onClick={() => console.log('edit' + session)}>
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
        <div>
            <Table
                dataSource={sessionList}
                columns={tableColumns}
                rowKey="_id"
            />
        </div>
    );
};

const mapDispatchToProps = {
    dispatchDeleteSession: deleteSession
};

export default connect(null, mapDispatchToProps)(SessionTable);
