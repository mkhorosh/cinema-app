import React from 'react';
import { PageHeader } from 'antd';

export const Header = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Менеджер киносеансов"
                subTitle="This is a subtitle"
            />
        </div>
    );
};
