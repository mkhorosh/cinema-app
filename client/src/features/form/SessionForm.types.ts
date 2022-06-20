import { Moment } from 'moment';
import { Session } from '../../common/Session';
import { User } from '../../common/User';

export interface OnFinishValues {
    filmName: string;
    filmDescription: string;
    supervisor: string;
    theatre: string;
    startDate: string | Moment;
    endDate: string | Moment;
    duration: string | Moment;
    genre: string;
}
export interface SessionFormProps {
    sessionInfo: Session | undefined;
    handleFormSubmit: (values: OnFinishValues) => void;
    form: any;
    users: User[];
}
