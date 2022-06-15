import { Moment } from 'moment';
import { Session } from '../../common/Session';
import { User } from '../../common/User';

export interface SessionTableProps {
    sessions: Session[];
    users: User[];
    isLoading: boolean;
    deleteSession: (id: string) => void;
}

export interface EditOnFinish {
    id: string;
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    startDate: string | Moment;
    endDate: string | Moment;
    duration: string;
    genre: string;
}
