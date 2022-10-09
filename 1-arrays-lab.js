function reverseInPlace(input) {
  for (let i = 0; i < Math.floor(input.length / 2); i++) {
    let tempElement = input[i];
    let secondTemp = input[input.length - 1 - i];
    input[i] = secondTemp;
    input[input.length - 1 - i] = tempElement;
  }

  console.log(input.join(" "));
}

reverseInPlace(["a", "b", "c", "d", "e"]);

// https://stackoverflow.com/questions/62797557/javascript-reverse-array-in-place

function evenOddSubtraction(arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      sumEven += arr[index];
    } else {
      sumOdd += arr[index];
    }
  }

  let diff = sumEven - sumOdd;
  console.log(diff);
}
evenOddSubtraction([1,2,3,4,5,6]);

function equalArrays(arr1, arr2){
    

}
equalArrays(['10','20','30'], ['10','20','30']);