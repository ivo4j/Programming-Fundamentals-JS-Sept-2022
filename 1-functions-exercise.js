function smallestOfThree(firstNumber, secondNumber,lastNumber){
    let smallestNumber = Math.min(firstNumber, secondNumber, lastNumber);
    console.log(smallestNumber);

}
//smallestOfThree(2, 5, 3);

function addAndSubtract(firstN, secondN, lastN) {
  function add(first, second) {
    let sumOfTwo = first + second;
    return sumOfTwo;
  }
  let sum = add(firstN, secondN);

  function subtract(sum, last) {
    return sum - last;
  }
  let result = subtract(sum, lastN);
  console.log(result);
}
//addAndSubtract(23,6,10);

function charsnRange(firstChar, secondChar) {
  let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let rangeEnd = Math.max(secondChar.charCodeAt(), firstChar.charCodeAt());
  let resultString = "";

  for (
    let currentChar = rangeStart + 1;
    currentChar < rangeEnd;
    currentChar++
  ) {
    let singleChar = String.fromCharCode(currentChar);

    if (currentChar + 1 === rangeEnd) {
      resultString += `${singleChar}`;
    } else {
      resultString += `${singleChar} `;
    }
  }
  console.log(resultString);
}
//charsnRange("#", ":");

function oddEvenSum(number) {
  let numberAsString = number.toString();
  let evenSum = 0;
  let oddSum = 0;
  let numberAsTringLength = numberAsString.length;

  for (let index = 0; index < numberAsTringLength; index++) {
    let singleNumber = Number(numberAsString[index]);

    if (singleNumber % 2 == 0) {
      evenSum += singleNumber;
    } else {
      oddSum += singleNumber;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
//oddEvenSum(1000435);

function palindromInteger(numberArray) {
  let numberArrayLength = numberArray.length;
  for (let index = 0; index < numberArrayLength; index++) {
    let numberAsString = numberArray[index].toString();
    let reversedString = numberAsString.split('').reverse().join('');

    // join - array to string
    // split - string to array

    if (numberAsString === reversedString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
//palindromInteger([123, 323, 421, 121]);

function loadingBar(number) {
  let percentCount = "%".repeat(number / 10);
  let dotsCount = ".".repeat(10 - number / 10);

  if (number === 100) {
    console.log("100% Complete!");
  } else if (number < 100) {
    console.log(`${number}% [${percentCount}${dotsCount}]`);
    console.log("Still loading...");
  }
}
//loadingBar(30);

function nxn(number) {
  //let arr = [];

  let rowGenerator = () => {
    let singleRow = "";
    for (let k = 1; k <= number; k++) {
      singleRow += `${number} `;
    }
    return singleRow;
  };

  for (let i = 0; i < number; i++) {
    /*  let output = '';
        for (let k = 1; k <= number; number++) {
            output += `${number} `; 
        } 
        arr.push(output); */
    //arr.push(rowGenerator());
    console.log(rowGenerator());
  }
  //console.log(arr.join('\n'));
  //console.log(arr); with arr[]
}
//nxn(3);

function passValidator(){
    
}
passValidator('logIn');