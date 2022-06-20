import { Moment } from 'moment';
import { Session } from '../../common/Session';
import { User } from '../../common/User';

export interface CreateValues {
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    startDate: string | Moment;
    endDate: string | Moment;
    duration: string | Moment;
    genre: string;
}

export interface EditValues {
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    startDate: string | Moment;
    endDate: string | Moment;
    duration: string | Moment;
    genre: string;
}

interface EditSessionI {
    id: string;
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    startDate: string | Moment;
    endDate: string | Moment;
    duration: string | Moment;
    genre: string;
}

interface CreateSessionI {
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    startDate: string | Moment;
    endDate: string | Moment;
    duration: string | Moment;
    genre: string;
}
export interface SessionModalProps {
    showModal: boolean;
    onClose: () => void;
    type: 'CREATE' | 'EDIT';
    sessionInfo?: Session;
    form: any;
    users: User[];
    createSessionAction: (values: CreateSessionI) => void;
    editSessionAction: (values: EditSessionI) => void;
}
