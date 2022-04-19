import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { FC } from 'react';
import { Session } from '../../common/Session';

interface CreateSessionButtonProps {
    createSession: (newSession: Session) => void;
}

export const CreateSessionButton: FC<CreateSessionButtonProps> = ({
    createSession
}) => {
    const showCreateSessionModal = () => {
        console.log('modal');
        let newSession: Session = {
            _id: '',
            filmName: '',
            filmDescription: '',
            supervisor: '',
            theatre: '',
            date: '',
            duration: '',
            status: ''
        };
        createSession(newSession);
    };

    return (
        <Button key="1" type="primary" onClick={() => showCreateSessionModal()}>
            Добавить <EditOutlined />
        </Button>
    );
};
