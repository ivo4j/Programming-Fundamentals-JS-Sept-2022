function specialNumber(number){
  
    for (let currentNumber = 1; currentNumber < number; currentNumber++){

        let sumOfDigits = 0;
        let numberToStrng = currentNumber.toString();
        let stringLength = numberToStrng.length;

        for (let index = 0; index <= stringLength; index++){

            if(currentNumber >= 10){
                sumOfDigits += Number(numberToStrng[index]);
            } 
        }

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11){
            console.log(`${currentNumber} -> True`);
        } else {
            console.log(`${currentNumber} -> False`);
        }
    }


}