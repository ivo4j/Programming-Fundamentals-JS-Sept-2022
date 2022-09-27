function multiplyByTwo(number) {
  console.log(number * 2);
}

function studentIno(name, age, grade) {
  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

function exellentGrade(grade) {
  if (grade >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}

function foreignLanguages(country) {
  switch (country) {
    case "USA":
    case "England":
      console.log("English");
      break;
    case "Spain":
    case "Mexico":
    case "Argentina":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
  }
}

function monthPrinter(number) {
  switch (number) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      console.log("Error!");
  }
}

function teatrePromotions(day, age){

}