const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(inputArr) {
  let sum=0;
  inputArr.forEach(element => {
    sum+=element;
  });
	return sum;
};

const multiply = function(inputArr) {
  let multiplier=1;
  inputArr.forEach(element=>{
    multiplier*=element;
  });
  return multiplier;
};

const power = function(num1,num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
	let fact=1;
  if(num===0){
    return 1;
  }else {
    for (let i=1;i<=num;i++){
      fact*=i;
    }
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
