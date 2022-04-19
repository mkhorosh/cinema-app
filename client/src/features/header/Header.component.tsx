import React, { FC, PropsWithChildren } from 'react';
import { createSession } from '../../store/actions/sessions.actions';
import { connect } from 'react-redux';
import { CreateSessionButton } from './CreateSessionButton.component';
import { PageHeader } from 'antd';
import { Session } from '../../common/Session';

interface HeaderProps {
    createSessionAction: (newSession: Session) => void;
}

export const Header: FC<HeaderProps> = ({
    createSessionAction
}: PropsWithChildren<HeaderProps>) => {
    return (
        <PageHeader
            title="Менеджер киносеансов"
            subTitle="This is a subtitle"
            extra={[
                <CreateSessionButton createSession={createSessionAction} />
            ]}
        />
    );
};

export default connect(null, {
    createSessionAction: createSession
})(Header);
