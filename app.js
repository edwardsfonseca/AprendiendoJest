const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
    
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar / 1.2 )* 127.9;
    return Math.floor(valueInYen);
}
const fromYenToPound=function(valueInYen){
    let valueInPound = (valueInYen / 127.9)*0.8;
    return Number(valueInPound.toFixed(2));
}

const sum = (a,b) => {
    return a + b
}

module.exports = { sum,fromEuroToDollar,fromYenToPound,fromDollarToYen };
console.log(fromYenToPound(1))