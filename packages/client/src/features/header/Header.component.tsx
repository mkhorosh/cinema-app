import React from 'react';
import { Button, PageHeader } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export const Header = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Менеджер киносеансов"
                subTitle="This is a subtitle"
                extra={[
                    <Button key="2">
                        <EditOutlined />
                    </Button>,
                    <EditOutlined
                        key="4"
                        onClick={() => console.log('edit2')}
                    />,
                    <Button
                        key="1"
                        type="primary"
                        onClick={() => console.log('edit')}
                    >
                        Добавить <EditOutlined />
                    </Button>
                ]}
            />
        </div>
    );
};
