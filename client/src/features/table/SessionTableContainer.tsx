import React, { FC, PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { SessionTable } from './SessionTable.component';
import {
    deleteSession,
    getSessions
} from '../../store/actions/sessions.actions';
import { RootState } from '../../store/reducers/rootReducer';
import { SessionTableContainerProps } from './SessionTableContainer.types';

export const SessionTableContainer: FC<SessionTableContainerProps> = ({
    sessions,
    isLoading,
    getSessionsAction,
    deleteSessionAction
}: PropsWithChildren<SessionTableContainerProps>) => {
    useEffect(() => {
        getSessionsAction();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SessionTable
            sessions={sessions}
            isLoading={isLoading}
            deleteSession={deleteSessionAction}
        />
    );
};

const mapStateToProps = (state: RootState) => ({
    sessions: state.sessions.sessionsList,
    isLoading: state.sessions.isLoading
});

export default connect(mapStateToProps, {
    getSessionsAction: getSessions,
    deleteSessionAction: deleteSession
})(SessionTableContainer);
