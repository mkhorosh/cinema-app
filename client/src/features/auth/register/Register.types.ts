import { RegisterData } from './RegisterContainer.types';

export interface RegisterProps {
    isLoading: boolean;
    onFinish: (values: RegisterData) => void;
}
