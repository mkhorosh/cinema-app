import { Moment } from 'moment';
import { RegisterPayload } from '../../../store/actions/register.types';

export interface RegisterContainerProps {
    isLoading: boolean;
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
