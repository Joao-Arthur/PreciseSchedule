import getMonthTotalDays from '../../Functions/Calendar/getMonthTotalDays';

export const monthsOfTheYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

function getEmptyWeek() {
    return new Array(7).fill(undefined);
}

export function monthDaysToTable(year: number, month: number) {
    const firstDayOfWeekInMonth = new Date(year, month, 1).getDay();
    const pastMonthDays = getMonthTotalDays(year, month);
    const currentMonthDays = getMonthTotalDays(year, month);

    return [
        getEmptyWeek(),
        getEmptyWeek(),
        getEmptyWeek(),
        getEmptyWeek(),
        getEmptyWeek(),
        getEmptyWeek()
    ].map((week, weekIndex) =>
        week.map((_, dayIndex) => {
            const cellIndex = weekIndex * 7 + dayIndex;
            const day = cellIndex + 1 - firstDayOfWeekInMonth;
            if (cellIndex < firstDayOfWeekInMonth) return NaN;
            if (day > currentMonthDays) return day - currentMonthDays;

            return day;
        })
    );
}

export function infoToDate(year: number, month: number, day: number) {
    return new Date(year, month, day);
}
