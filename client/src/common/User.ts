import { Moment } from 'moment';

export interface User {
    login: string;
    password: string;
    fullName: string;
    dateOfBirth: string | Moment;
    position: string;
}
