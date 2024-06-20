import dayjs from 'dayjs';

export const getWeek = (currentDate) => {
    const startOfWeek = currentDate.startOf('week');
    return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, 'day'));
};
