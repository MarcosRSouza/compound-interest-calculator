const compundRateWithAport = ({ initialCapital, aport = 0, period, periodType, rate, rateType }) => {
    let totalAmmount = 0;
    if (aport !== 0) {
        for (let i = 1; i < period; i++) {
            let interest = Math.pow(1 + rate, i);
            totalAmmount += aport * interest;
        }
        totalAmmount += aport;
    }
    let interest = Math.pow(1 + rate, period);
    totalAmmount += initialCapital * interest;
    return Number.parseFloat(totalAmmount).toFixed(2);
}

module.exports = compundRateWithAport;