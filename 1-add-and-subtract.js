function addAndSubTract(input) {
  let resultArray = [];
  let inputArraySum = 0;
  let resultAraySum = 0;
  let inputLength = input.length;
  for (let i = 0; i < inputLength; i++) {
    let currentNumber = input[i];
    let odd = input[i] - i;
    let even = input[i] + i;

    if (currentNumber % 2 == 0) {
      resultArray.push(even);
    } else {
      resultArray.push(odd);
    }
    inputArraySum += currentNumber;
    resultAraySum += resultArray[i];
  }
  console.log(resultArray);
  console.log(inputArraySum);
  console.log(resultAraySum);
}
addAndSubTract([5, 15, 23, 56, 35]);
