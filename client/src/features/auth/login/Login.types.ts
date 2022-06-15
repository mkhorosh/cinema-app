import { LoginPayload } from '../../../store/actions/users.types';

export interface LoginContainerProps {
    loginAction: ({ login, password }: LoginPayload) => void;
}

export interface UserData {
    login: string;
    password: string;
}
export interface LoginProps {
    onFinish: (values: UserData) => void;
}
