import { VideoCameraFilled } from '@ant-design/icons';
import React from 'react';

interface IconProps {
    genre: string;
}

export const SessionIcon = ({ genre }: IconProps) => {
    let color: string = '';
    switch (genre) {
        case 'детектив':
            color = 'red';
            break;
        case 'драма':
            color = 'orange';
            break;
        case 'триллер':
            color = 'yellow';
            break;
        case 'ужасы':
            color = 'green';
            break;
        case 'боевик':
            color = 'blue';
            break;
        case 'приключения':
            color = 'purple';
            break;
        case 'мелодрама':
            color = 'pink';
            break;
        case 'комедия':
            color = 'cian';
            break;
        default:
            break;
    }
    return (
        <VideoCameraFilled style={{ color: `${color}`, fontSize: '20px' }} />
    );
};
