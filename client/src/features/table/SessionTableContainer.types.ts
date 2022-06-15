import { Session } from '../../common/Session';
import { User } from '../../common/User';

export interface SessionTableContainerProps {
    sessions: Session[];
    users: User[];
    isLoading: boolean;
    getSessionsAction: () => void;
    deleteSessionAction: (id: string) => void;
    getUsersAction: () => void;
}
