function vacationTotalPrice(year) {
  let outputNumber = 0;
  if (number % 10 === 0) {
    outputNumber = 10;
  } else if (number % 7 === 0) {
    outputNumber = 7;
  } else if (number % 6 === 0) {
    outputNumber = 6;
  } else if (number % 3 === 0) {
    outputNumber = 3;
  } else if (number % 2 === 0) {
    outputNumber = 2;
  } else {
    console.log("Not divisible");
  }
  console.log(`The number is divisible by ${outputNumber}`);
}
//vacationTotalPrice(30,"Students", "Sunday");

function leapyear(year) {
  /*   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('yes');
      } else {
        console.log('no');
      } */

  let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (isLeapYear) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
//leapyear(4);

function printAdnSum(startNumber, endNumber) {
  let sum = 0;
  let output = "";

  for (
    let currentNumber = startNumber;
    currentNumber <= endNumber;
    currentNumber++
  ) {
    if (currentNumber === endNumber) {
      output += `${currentNumber}`;
    } else {
      output += `${currentNumber} `;
    }
    sum += currentNumber;
  }
  console.log(output);
  console.log(`Sum: ${sum}`);
}
//printAdnSum(5,10);

function triangeOfNumbers(number) {
  for (let i = 1; i <= number; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += `${i} `;
    }
    console.log(row);
  }
}
//triangeOfNumbers(3);

function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
}
//multiplicationTable(5);

function vacation(people, groupType, dayOfWeek) {
  let totalPrice = 0;
  switch (groupType) {
    case "Students":
      if (dayOfWeek === "Friday") {
        totalPrice = people * 8.45;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = people * 9.8;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = people * 10.46;
      }
      if (people >= 30) {
        totalPrice *= 0.85;
      }
      break;
    case "Business":
      if (people >= 100) {
        people -= 10;
      }
      if (dayOfWeek === "Friday") {
        totalPrice = people * 10.9;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = people * 15.6;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = people * 16;
      }
      break;
    case "Regular":
      if (dayOfWeek === "Friday") {
        totalPrice = people * 15;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = people * 20;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = people * 22.5;
      }
      if (people >= 10 && people <= 20) {
        totalPrice *= 0.95;
      }
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
//vacation(40, "Regular", "Saturday");

function login(username) {
  // let splitString = username.split("");
  //let reverseArray = splitString.reverse();
  //let password = reverseArray.join("");
  // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
  let password = username[0];
  let attempt = 0;
  let usernameReversed = "";
  let currenUserName = "";

  for (let index = 1; index <= username.length; index++) {
    currenUserName = username[index];
    usernameReversed = currenUserName.split("").reverse().join("");
  }

  if (usernameReversed === password) {
    console.log(`User ${username[index]} logged in." `);
  } else {
    console.log(`Incorrect password. Try again.`);
    attempt++;
    if (attempt === 4) {
      console.log(`User ${username[index]} blocked!`);
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);

//function kingDjoser(base, increment) {}
//kingDjoser();

//function 