import { LogoutAction } from '../store/actions/users.types';

export interface AppProps {
    isAuth: boolean;
    setLoginAction: (token: string | null, login: string | null) => void;
    logoutAction: () => LogoutAction;
}
