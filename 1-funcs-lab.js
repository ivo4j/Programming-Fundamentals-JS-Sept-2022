function repeatString(text, count) {
  let result = "";

  for (let index = 0; index < count; index++) {
    result += text;
  }

  return result;
}

function powerOf(base, radix){
    let result = base ** radix;
    return result;
}

function orders(product, quantity){
   let singleItemprice = 0;
    switch (product) {
        case 'coffee':
            singleItemprice = 1.50;
            break;
        case 'water':
            singleItemprice = 1.00;
            break;
        case 'coke':
            singleItemprice = 1.40;
            break;
        case 'snacks':
            singleItemprice = 2.00;
            break;
        default:
            break;
    }
    let totalPrice = singleItemprice * quantity;
    console.log(totalPrice.toFixed(2));
}
orders("water", 5);

function simpleCalculator(number1, number2, operator) {
  switch (operator) {
    case "add":
      return number1 + number2;
      break;
    case "subtract":
      return number1 - number2;
      break;
    case "multiply":
      return number1 * number2;
      break;
    case "divide":
      return number1 / number2;

    default:
      break;
  }
}
simpleCalculator(5, 5, 'multiply');

function signCheck(numOne, numTwo, numThree){

}
signCheck(5, 12, -15);