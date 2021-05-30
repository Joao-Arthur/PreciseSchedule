import assert from './assert';

describe('assert', () => {
    it('should do nothing when true', () => {
        expect(assert(1 + 1 === 2, '2 equals 2')).toBeUndefined();
    });

    it('should throws when false', () => {
        expect(() => {
            assert(2 + 2 === 5, '2 plus 2 is never 5');
        }).toThrowError(new Error('2 plus 2 is never 5'));
    });
});
