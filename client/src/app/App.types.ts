import { LogoutAction } from '../store/actions/login.types';

export interface AppProps {
    isAuth: boolean;
    setLoginAction: (token: string | null, login: string | null) => void;
    logoutAction: () => LogoutAction;
}
