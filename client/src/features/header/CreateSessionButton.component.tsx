import { EditOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { User } from '../../common/User';
import { RootState } from '../../store/reducers/rootReducer';
import SessionModal from '../modal/SessionModal.component';

interface CreateSessionButtonProps {
    users: User[];
}

const CreateSessionButton: FC<CreateSessionButtonProps> = ({ users }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [form] = Form.useForm();

    const showCreateSessionModal = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            <Button key="1" type="primary" onClick={showCreateSessionModal}>
                Добавить <EditOutlined />
            </Button>
            <SessionModal
                showModal={isModalVisible}
                onClose={() => {
                    setIsModalVisible(false);
                    form.resetFields();
                }}
                type="CREATE"
                form={form}
                users={users}
            />
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    users: state.users.users
});

export default connect(mapStateToProps)(CreateSessionButton);
