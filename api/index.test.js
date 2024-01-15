const index = require('./index.js');

describe('tests compound rate calculator variations', () => {
    test('should calculate with no aport', () => {
        expect(
            index({
                rateType: 'MONTH',
                periodType: 'MONTH',
                period: 1,
                rate: 0.01,
                initialCapital: 100,
            })).toBe(101);
        expect(
            index({
                rateType: 'MONTH',
                periodType: 'MONTH',
                period: 2,
                rate: 0.01,
                initialCapital: 100,
            })).toBe(102.01);
    });
    test.todo('period type is MONTH and rate type is YEAR');
    test.todo('period type is YEAR and rate type is MONTH');
    test.todo('period type is MONTH and rate type is MONTH');
    test.todo('period type is YEAR and rate type is YEAR');
});