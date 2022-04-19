import { Session } from '../../common/Session';

export interface SessionTableProps {
    sessionList: Session[];
    deleteSession: (id: string) => void;
    editSession: (newSession: Session) => void;
}
