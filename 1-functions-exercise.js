function smallestOfThree(firstNumber, secondNumber,lastNumber){
    let smallestNumber = Math.min(firstNumber, secondNumber, lastNumber);
    console.log(smallestNumber);

}
smallestOfThree(2, 5, 3);

function addAndSubtract(firstN, secondN, lastN){

    function add(first, second){
        let sumOfTwo = first + second;
        return sumOfTwo;
    }
    let sum = add(firstN, secondN);

    function subtract(sum, last){
        return sum - last;
    }
    let result = subtract(sum - lastN);
    console.log(result);

}
addAndSubtract(23,6,10);

function charsnRange(firstChar, secondChar) {
  let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let rangeEnd = Math.max(secondChar.charCodeAt(), firstChar.charCodeAt());

  let charsArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
}
//charsnRange();

function oddEvenSum(number){
    let numberAsString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    let numberAsTringLength = numberAsString.length;

    for (let index = 0; index < numberAsTringLength; index++) {

        let singleNumber = Number(numberAsString[index]);
        
        if (singleNumber % 2 == 0) {
            evenSum 
        }
        
    }

}
//oddEvenSum(1000435);

function palindromInteger(numberArray) {
  let numberArrayLength = numberArray.length;
  for (let index = 0; index < numberArrayLength; index++) {
    let numberAsString = numberArray[index].toString();
    let reversedString = numberAsString.split("").reverse().join("");

    if (numberAsString === reversedString) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindromInteger([123, 323, 421, 121]);

function loadingBar(number){

}

function nxn(){

}

function passValidator(){
    
}