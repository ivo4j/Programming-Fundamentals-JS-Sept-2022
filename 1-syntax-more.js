function sortNumbers(arr) {
  let arrLength = arr.length;
  let temp = arr[0];
  for (let i = 1; i < arrLength; i++) {
    if (temp > arr[i] && i === 2) {
      console.log(temp);
    } else {
      temp = arr[i];
    }
  }
}
sortNumbers([2, 1, 3]);
