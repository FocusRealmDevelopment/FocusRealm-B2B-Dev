import dayjs from 'dayjs';

export function getMonth(year = dayjs().year(), month = dayjs().month()) {
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfMonth;

    console.log(currentMonthCount);

    const dayMatrix = new Array(6).fill(null).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });

    return dayMatrix;
}
