/*simple:
  for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue simple;
    }

    alert( i ); // простое
  }
  */

  let number1 = prompt("Введите первое число");
  let number2 = prompt("Введите второе число");

  function isSimpleNumber (number1, number2) {
    if (number1 < number2) {
      for (let i = number1; i <=number2; i++) {

      }

    }
    else {
      console.log("Необходимо, чтобі первое число было меньше второго")
    }
  }

  isSimpleNumber (number1, number2);