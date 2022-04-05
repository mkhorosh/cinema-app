import { DeleteSession } from '../../store/actions/sessions';

export interface SessionTableProps {
    dispatchDeleteSession?: (key: string) => DeleteSession;
}
