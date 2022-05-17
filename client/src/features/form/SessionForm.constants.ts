const genres = [
    'комедия',
    'мелодрама',
    'приключения',
    'боевик',
    'ужасы',
    'триллер',
    'детектив',
    'драма',
    'фантастика'
];
const theatres = ['Седьмое небо', 'Небо', 'Орлёнок'];

export const statusOptions = genres.map((state: string) => {
    return {
        label: state,
        value: state
    };
});

export const theatresOptions = theatres.map((theatre: string) => {
    return {
        label: theatre,
        value: theatre
    };
});
