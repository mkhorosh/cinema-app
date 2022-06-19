import React from 'react';
import { PageHeader } from 'antd';
import CreateSessionButton from './CreateSessionButton.component';

export const Header = () => {
    return (
        <PageHeader
            title="Менеджер киносеансов"
            extra={<CreateSessionButton />}
        />
    );
};
