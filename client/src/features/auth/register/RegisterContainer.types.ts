import { Moment } from 'moment';
import { RegisterPayload } from '../../../store/actions/users.types';

export interface RegisterContainerProps {
    registerAction: ({
        login,
        name,
        date,
        position,
        password
    }: RegisterPayload) => void;
}

export interface RegisterData {
    login: string;
    name: string;
    date: string | Moment;
    position: string;
    password: string;
}
