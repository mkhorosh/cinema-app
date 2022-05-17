import { Modal } from 'antd';
import moment from 'moment';
import React, { FC, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    createSession,
    editSession,
    getUsers
} from '../../store/actions/sessions.actions';
import { RootState } from '../../store/reducers/rootReducer';
import { SessionForm } from '../form/SessionForm.component';
import {
    CreateValues,
    EditValues,
    SessionModalProps
} from './SessionModal.types';

export const SessionModal: FC<SessionModalProps> = ({
    showModal,
    onClose,
    type,
    sessionInfo,
    form,
    users,
    getUsersAction,
    createSessionAction,
    editSessionAction
}) => {
    const modalTitle = type === 'CREATE' ? 'CREATE' : 'EDIT';

    useEffect(() => {
        getUsersAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onFinishCreate = useCallback(
        (values: CreateValues): void => {
            createSessionAction({
                ...values,
                duration: moment(values.duration).format('HH:mm'),
                date: moment(values.date)
            });
            onClose();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [createSessionAction]
    );
    const onFinishEdit = useCallback(
        (values: EditValues): void => {
            editSessionAction({
                ...values,
                id: sessionInfo ? sessionInfo.id : '',
                duration: moment(values.duration).format('HH:mm'),
                date: moment(values.date)
            });
            onClose();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [editSessionAction]
    );
    const modalOnSubmit = type === 'CREATE' ? onFinishCreate : onFinishEdit;
    return (
        <Modal
            title={modalTitle}
            visible={showModal}
            onCancel={onClose}
            footer={null}
        >
            <SessionForm
                sessionInfo={sessionInfo}
                handleFormSubmit={modalOnSubmit}
                form={form}
                users={users}
            />
        </Modal>
    );
};

const mapStateToProps = (state: RootState) => ({
    users: state.sessions.users
});

export default connect(mapStateToProps, {
    createSessionAction: createSession,
    editSessionAction: editSession,
    getUsersAction: getUsers
})(SessionModal);
