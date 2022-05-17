import { Session } from '../../common/Session';

export interface SessionTableContainerProps {
    sessions: Session[];
    isLoading: boolean;
    getSessionsAction: () => void;
    deleteSessionAction: (id: string) => void;
}
