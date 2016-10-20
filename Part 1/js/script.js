var base = 0;
var power = 0;
var myResult = 0;

base = inputInteger ('Введите число:');
power = inputInteger ('Введите степень:');
myResult = myPow (base, power);
alert ('Результат: ' + base + ' в степени ' + power + ' = ' + myResult);


function inputInteger (point) {
  var flag = false;
  var inputBase = 0;

  do {
    inputBase = prompt(point);
  inputBase = Number(inputBase);
  flag = false;
  var fraction = 0;
  if (isNaN(inputBase)) {
    alert ('Должно быть число, повторите попытку!');
    flag = true;
    inputBase = 0;
  } else {
    fraction = inputBase - Math.floor(inputBase);
    if (fraction != 0) {
      flag = true;
    inputBase = 0;
    alert ('Ожидается целое, повторите попытку!');
    }
  }
  }
  while (flag);

  return (inputBase);
}


function myPow(multiplicand, multiplier) {
  var iterations = 0;
  var result = 0;

  iterations = Math.abs(multiplier);
  result = 1;

  for (var i = iterations; i > 0; i--) {
    result = result * multiplicand;
  }
  if (multiplier < 0) {
    if (multiplicand != 0) {
    result = 1 / result;
    } else {
    return ('Деление на 0!');
  }
  } else {
    if (multiplier = 0) {
    result = 1;
  }
  }

  return (result);
}


