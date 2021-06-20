import isLeapYear from '../isLeapYear';

const monthDays = [31, NaN, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function getMonthTotalDays(year: number, month: number) {
    if (month !== 1) return monthDays[month];
    return isLeapYear(year) ? 29 : 28;
}
