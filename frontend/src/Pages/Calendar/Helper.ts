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
            const dayInMonth = cellIndex + 1 - firstDayOfWeekInMonth;
            return dayInMonth;
        })
    );
}
