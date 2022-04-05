import { Moment } from 'moment';

export interface Session {
    _id: string;
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    date: string | Moment;
    duration: string;
    status: string;
}
