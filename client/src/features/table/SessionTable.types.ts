import { Moment } from 'moment';
import { Session } from '../../common/Session';

export interface SessionTableProps {
    sessions: Session[];
    isLoading: boolean;
    deleteSession: (id: string) => void;
}

export interface EditOnFinish {
    id: string;
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    date: string | Moment;
    duration: string;
    genre: string;
}
