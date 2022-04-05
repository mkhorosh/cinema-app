import React from 'react';
import { Button, PageHeader } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export const Header = () => {
    return (
        <div>
            <PageHeader
                title="Менеджер киносеансов"
                subTitle="This is a subtitle"
                extra={[
                    <Button key="1" type="primary">
                        Добавить <EditOutlined />
                    </Button>
                ]}
            />
        </div>
    );
};
