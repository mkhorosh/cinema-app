import React, { FC, PropsWithChildren, useEffect } from 'react';
import { connect } from 'react-redux';
import { SessionTable } from './SessionTable.component';
import {
    deleteSession,
    editSession,
    getSessions
} from '../../store/actions/sessions.actions';
import { Session } from '../../common/Session';
import { RootState } from '../../store/reducers/rootReducer';

interface SessionTableContainerProps {
    sessions: Session[];
    getSessionsAction: () => void;
    deleteSessionAction: (id: string) => void;
    editSessionAction: (newSession: Session) => void;
}

export const SessionTableContainer: FC<SessionTableContainerProps> = ({
    sessions,
    getSessionsAction,
    deleteSessionAction,
    editSessionAction
}: PropsWithChildren<SessionTableContainerProps>) => {
    useEffect(() => {
        try {
            getSessionsAction();
        } catch (e) {
            console.log(e);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SessionTable
            sessionList={sessions}
            deleteSession={deleteSessionAction}
            editSession={editSessionAction}
        />
    );
};

const mapStateToProps = (state: RootState) => ({
    sessions: state.sessions.sessions
});

export default connect(mapStateToProps, {
    getSessionsAction: getSessions,
    deleteSessionAction: deleteSession,
    editSessionAction: editSession
})(SessionTableContainer);
