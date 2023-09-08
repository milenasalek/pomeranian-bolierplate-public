export const JsNumbersTraining = () => {
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age < 18) {
      return 'You are too young to drive.';
    }

    if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    }

    return hasCar ? 'You can drive your car!' : 'You can drive a rental car.';
  }

  function hasEnough(hasEnough) {
    return hasEnough;
  }

  /*function isStringShort(value) {
    if (value.length < 10) {
      return true;
    } else {
      false;
    }
  }*/

  const isStringShort = (inputString) => inputString.length < 10;
  const sampleString = 'Jestem tekstem';
  const stringIsShort = isStringShort(sampleString);
  console.log(stringIsShort);
  console.log(isStringShort('abcde'));

  /*napisać funkcję zmieniającą ocenę 1-6 na jej wersję tekstową w przypadku innej wartości niz 1-6

zwrócić złe wejście.*/

  function changeGradeToText(grade) {
    if (grade > 6 || grade < 1) {
      return 'błąd';
    }
    if (grade === 1) {
      return 'jeden';
    }
    if (grade === 2) {
      return 'dwa';
    }
    if (grade === 3) {
      return 'trzy';
    }
    if (grade === 4) {
      return 'cztery';
    }
    if (grade === 5) {
      return 'pięć';
    }
    if (grade === 6) {
      return 'sześć';
    }
  }
  console.log(changeGradeToText(6));

  /*Napisz własną implementację Math.max bez jej użycia*/
  function ownMax(a, b) {
    if (a > b) {
      return a;
    }
    if (a < b) {
      return b;
    }
    if (a === b) {
      return a;
    }
  }

  console.log(ownMax(3, 3));
  /*console.log(ownMax(4, 7));*/

  return <div>JS Numbers Training</div>;
};
