const compundRateWithAport = ({ initialCapital, aport, period, periodType, rate, rateType }) => {
    // let totalMonths = 180;
    // let monthlyAport = 1000;
    let totalAmmount = 0;
    // let compoundRate = 0.1;
    // M = C * (1+i)^t
    // for (let i = 1; i <= totalMonths; i++) {
    // if (i === 1) {
    let interest = Math.pow(1 + rate, period);
    totalAmmount += initialCapital * interest;
    // }
    // }
    return totalAmmount;
}

module.exports = compundRateWithAport;