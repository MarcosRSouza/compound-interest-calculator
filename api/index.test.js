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
            })).toBe("101.00");
        expect(
            index({
                rateType: 'MONTH',
                periodType: 'MONTH',
                period: 2,
                rate: 0.01,
                initialCapital: 100,
            })).toBe("102.01");
    });
    test('should calculate with aport', () => {
        expect(index({
            rateType: 'MONTH',
            periodType: 'MONTH',
            period: 2,
            rate: 0.01,
            initialCapital: 100,
            aport: 100,
        })).toBe("303.01");
        expect(index({
            rateType: 'MONTH',
            periodType: 'MONTH',
            period: 3,
            rate: 0.01,
            initialCapital: 500,
            aport: 1000,
        })).toBe("3545.25");
        expect(index({
            rateType: 'MONTH',
            periodType: 'MONTH',
            period: 5,
            rate: 0.1,
            initialCapital: 5000,
            aport: 10000,
        })).toBe("69103.55");
    });
    test.todo('period type is MONTH and rate type is YEAR');
    test.todo('period type is YEAR and rate type is MONTH');
    test.todo('period type is MONTH and rate type is MONTH');
    test.todo('period type is YEAR and rate type is YEAR');
});