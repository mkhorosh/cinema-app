const positions = ['кассир', 'менеджер', 'клининг', 'охрана'];

export const positionOptions = positions.map((position: string) => {
    return {
        label: position,
        value: position
    };
});
