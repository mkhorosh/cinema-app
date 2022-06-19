import { Modal } from 'antd';
import moment from 'moment';
import React, { FC, useCallback } from 'react';
import { connect } from 'react-redux';
import {
    createSession,
    editSession
} from '../../store/actions/sessions.actions';
import { SessionForm } from '../form/SessionForm.component';
import {
    CreateValues,
    EditSessionI,
    SessionModalProps
} from './SessionModal.types';

const SessionModal: FC<SessionModalProps> = ({
    showModal,
    onClose,
    type,
    sessionInfo,
    form,
    users,
    createSessionAction,
    editSessionAction
}) => {
    const modalTitle =
        type === 'CREATE' ? 'Добавить запись' : 'Редактировать запись';

    const onFinishCreate = useCallback(
        (values: CreateValues): void => {
            createSessionAction({
                ...values,
                duration: moment(values.duration).format('HH:mm'),
                startDate: moment(values.startDate),
                endDate: moment(values.endDate)
            });
            onClose();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [createSessionAction]
    );
    const onFinishEdit = useCallback(
        (values: EditSessionI): void => {
            console.log('sessionInfo ');
            console.log(sessionInfo);
            console.log('values ');
            console.log(values);
            editSessionAction({
                ...values,
                id: sessionInfo ? sessionInfo.id : '',
                duration: moment(values.duration).format('HH:mm'),
                startDate: moment(values.startDate),
                endDate: moment(values.endDate)
            });
            onClose();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [editSessionAction, sessionInfo]
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

export default connect(null, {
    createSessionAction: createSession,
    editSessionAction: editSession
})(SessionModal);
