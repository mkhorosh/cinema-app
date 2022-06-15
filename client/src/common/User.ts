import { Moment } from 'moment';

export interface User {
    login: string;
    password: string;
    name: string;
    date: string | Moment;
    position: string;
}
