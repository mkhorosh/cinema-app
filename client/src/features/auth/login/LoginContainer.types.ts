import { LoginPayload } from '../../../store/actions/login.types';

export interface LoginContainerProps {
    isLoading: boolean;
    loginAction: ({ login, password }: LoginPayload) => void;
}

export interface UserData {
    login: string;
    password: string;
}
