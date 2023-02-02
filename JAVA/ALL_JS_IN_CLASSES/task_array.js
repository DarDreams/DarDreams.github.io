const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(value => value.amount > 0).map(item => item.amount)
    .reduce((sum, cur) => sum + cur);
};

//console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    let x = data.some(value => value.amount < 0);
    if (x === true) {
        return data.map(item => item.amount).reduce((sum, cur) => sum + cur)
    } else return getPositiveIncomeAmount(funds)
};

console.log(getTotalIncomeAmount(funds));

