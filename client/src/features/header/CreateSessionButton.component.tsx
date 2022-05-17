import { EditOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import React, { useState } from 'react';
import SessionModal from '../modal/SessionModal.component';

export const CreateSessionButton = () => {
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
                sessionInfo={undefined}
                form={form}
            />
        </>
    );
};
