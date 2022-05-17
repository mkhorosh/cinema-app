import { UserData } from './LoginContainer.types';

export interface LoginProps {
    isLoading: boolean;
    onFinish: (values: UserData) => void;
}
