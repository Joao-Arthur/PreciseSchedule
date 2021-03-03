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

const monthDays = [31, NaN, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = (year: number) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const getMonthTotalDays = (year: number, month: number): number =>
    month === 1 ? (isLeapYear(year) ? 29 : 28) : monthDays[month];

export const monthDaysToTable = (year: number, month: number): number[][] => {
    const firstDayOfWeekInMonth = new Date(year, month, 1).getDay();
    const monthDays = getMonthTotalDays(year, month);
    return [
        new Array(7).fill(undefined),
        new Array(7).fill(undefined),
        new Array(7).fill(undefined),
        new Array(7).fill(undefined),
        new Array(7).fill(undefined),
        new Array(7).fill(undefined)
    ].map((week, weekIndex) =>
        week.map((_, dayIndex) => {
            const cellIndex = weekIndex * 7 + dayIndex;
            if (cellIndex < firstDayOfWeekInMonth) return NaN;
            if (cellIndex + 1 - firstDayOfWeekInMonth > monthDays) return NaN;
            return cellIndex + 1 - firstDayOfWeekInMonth;
        })
    );
};
