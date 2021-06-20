import isLeapYear from './isLeapYear';

describe('isLeapYear', () => {
    it('Years divisible by 400 should be leap years', () => {
        expect(isLeapYear(1600)).toBe(true);
        expect(isLeapYear(2000)).toBe(true);
        expect(isLeapYear(2400)).toBe(true);
    });

    it('Years divisible by 100 but not by 400 should not be leap years', () => {
        expect(isLeapYear(1800)).toBe(false);
        expect(isLeapYear(1900)).toBe(false);
        expect(isLeapYear(2100)).toBe(false);
        expect(isLeapYear(2200)).toBe(false);
    });

    it('Years divisible by 4 but not by 100 should be leap years', () => {
        expect(isLeapYear(2024)).toBe(true);
        expect(isLeapYear(2028)).toBe(true);
        expect(isLeapYear(2032)).toBe(true);
    });

    it('Other years should not be leap years', () => {
        expect(isLeapYear(2021)).toBe(true);
        expect(isLeapYear(2022)).toBe(true);
        expect(isLeapYear(2023)).toBe(true);
    });
});
