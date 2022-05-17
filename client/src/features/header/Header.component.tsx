import React from 'react';
import { CreateSessionButton } from './CreateSessionButton.component';
import { PageHeader } from 'antd';

export const Header = () => {
    return (
        <PageHeader
            title="Менеджер киносеансов"
            extra={<CreateSessionButton />}
        />
    );
};
