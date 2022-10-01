function commonElements(firstArray, secondArray) {
  /* for (let firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
    for (secondIndex = 0; secondIndex < secondArray.length; secondIndex++) {
      if (firstArray[firstIndex] === secondArray[secondIndex]) {
        console.log(firstArray[firstIndex]);
      }
    }
  } */

  for(const element of firstArray){
    if(secondArray.includes(element))
    console.log(element);
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);

function mergeArrays(firstArray, secondArray) {
  let resultArray = [];
  let firstArrayLength = firstArray.length;

  for (let index = 0; index < firstArrayLength; index++) {
    if (index % 2 === 0) {
      resultArray.push(Number(firstArray[index]) + Number(secondArray[index]));
    } else {
      resultArray.push(firstArray[index] + secondArray[index]);
    }
  }

  console.log(resultArray.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);

function arraysRotation(arrayToRotate, rotations) {
  //  rotationsTimes = rotations % arrayToRotate.length;
  for (let index = 0; index < rotations; index++) {
    let numberToMove = arrayToRotate.shift();
    arrayToRotate.push(numberToMove);
  }

 /*  let rotationTimes = rotations % arrayToRotate.length;
    for(let index = 0; index < rotationTimes; index++){
        let firstElement = arrayToRotate[0];
        for(let innerI = 0; innerI < arrayToRotate[innerI + 1]; innerI++){
            arrayToRotate[innerI] = arrayToRotate[innerI + 1]
        }
        arrayToRotate[arrayToRotate.length - 1] = firstElement;
    } */
  

  console.log(arrayToRotate.join(" "));
}
arraysRotation([51, 47, 32, 61, 21], 2);

function maxNumber(arr) {
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isBigger = true;
    let currentNumber = arr[i];

    for (let k = i + 1; k < arr.length; k++) {
      if (currentNumber <= arr[k]) {
        isBigger = false;
      }
    }
    if (isBigger) {
      resultArray.push(arr[i]);
    }
  }
  console.log(resultArray.join(" "));
}
maxNumber([14, 24, 3, 19, 15, 17]);

function equalSum(arr) {
  let foundIndex = "no";
  let arrLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // l - left
    for (let l = 0; l < i; l++) {
      leftSum += arr[l];
    }
    // r - right
    for (let r = i + 1; r < arr.length; r++) {
      rightSum += arr[r];
    }

    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }

  console.log(foundIndex);
}
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);


function maxSequence(){
    
}
