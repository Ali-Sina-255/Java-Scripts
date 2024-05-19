"user strict";

function logger() {
  console.log("MY name is ali");
}

function fruitProcessor(apple, orange) {
  const juice = ` Juice with ${apple} apple and ${orange} orranges.`;
  return juice;
}
console.log(fruitProcessor(5, 3));

// FUNCTION VS. EXPERATIONS
// this kind of function we can call befor function declication

function calcAge1(brithYear) {
  return 2037 - brithYear;
}
const age = calcAge1(1991);
console.log(age);

// FUNCTION  EXPRESSION
// it is called anonomous fountion
const calcAge = function (brithYear) {
  return 2037 - brithYear;
};
const age1 = calcAge1(1991);
console.log(age1);

// ARROW FUCNTION
// wiht No Parameters
const calcAge3 = (brithYear) => 2037 - brithYear;
console.log(calcAge3(1991));

// wiht One Parameters
const yearRetirement = (brithYear) => {
  const age = 2037 - brithYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(yearRetirement(1991));

// wiht tow Parameters
const yearRetirements = (brithYear, first_name) => {
  const age = 2037 - brithYear;
  const retirement = 65 - age;
  return `${first_name} retires in ${retirement} years `;
};
console.log(yearRetirements(2000, "ali"));

// function calling in site anthor foucntion
