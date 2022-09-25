function convert(pounds){
    const poundValue = 1.31;
    let poundsToDollars = pounds * poundValue;

    console.log(poundsToDollars.toFixed(3))

    let number = 3.1416;
    console.log(number.toPrecision(3));
    console.log(parseFloat(number.toFixed(3)));
}