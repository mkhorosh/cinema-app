import React, { FC, PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { SessionTable } from './SessionTable.component';
import {
    deleteSession,
    getSessions
} from '../../store/actions/sessions.actions';
import { RootState } from '../../store/reducers/rootReducer';
import { SessionTableContainerProps } from './SessionTableContainer.types';
import { getUsers } from '../../store/actions/users.actions';

const SessionTableContainer: FC<SessionTableContainerProps> = ({
    sessions,
    users,
    isLoading,
    getSessionsAction,
    deleteSessionAction,
    getUsersAction
}: PropsWithChildren<SessionTableContainerProps>) => {
    useEffect(() => {
        getSessionsAction();
        getUsersAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SessionTable
            sessions={sessions}
            users={users}
            isLoading={isLoading}
            deleteSession={deleteSessionAction}
        />
    );
};

const mapStateToProps = (state: RootState) => ({
    sessions: state.sessions.sessionsList,
    users: state.users.users,
    isLoading: state.sessions.isLoading
});

export default connect(mapStateToProps, {
    getSessionsAction: getSessions,
    getUsersAction: getUsers,
    deleteSessionAction: deleteSession
})(SessionTableContainer);
