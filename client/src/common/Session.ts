import { Moment } from 'moment';

export interface Session {
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
