import getMonthTotalDays from './getMonthTotalDays';

describe('getMonthTotalDays', () => {
    it('February in leap years should have 29 days', () => {
        expect(getMonthTotalDays(2024, 1)).toBe(29);
        expect(getMonthTotalDays(2028, 1)).toBe(29);
        expect(getMonthTotalDays(2032, 1)).toBe(29);
    });

    it('February in other years should have 28 days', () => {
        expect(getMonthTotalDays(2021, 1)).toBe(28);
        expect(getMonthTotalDays(2022, 1)).toBe(28);
        expect(getMonthTotalDays(2023, 1)).toBe(28);
    });

    it('Other months should return fixed total days', () => {
        expect(getMonthTotalDays(2021, 5)).toBe(30);
        expect(getMonthTotalDays(2021, 6)).toBe(31);
        expect(getMonthTotalDays(2021, 7)).toBe(31);
        expect(getMonthTotalDays(2021, 8)).toBe(30);
    });
});
