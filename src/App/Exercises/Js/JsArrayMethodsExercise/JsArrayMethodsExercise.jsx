export function JsArrayMethodsExercise() {
  // napisz funkcję, która przyjmuje dwie tablice i zwraca nową tablicę, która zawiera tylko elementy, które występują w obu tablicach
  // sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]
  function sameNumbers(array1, array2) {
    const commonElements = array1.filter((item) => array2.includes(item));
    return commonElements;
  }
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 5, 7, 9];
  const result = sameNumbers(array1, array2);
  console.log('sameNumbers', result);

  // napisz funkcję, która liczy średnią z liczb w tablicy
  // averageFromArray([1, 2, 3, 4, 5, 6]) => 3.5

  function averageFromArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
      throw new Error('Input must be a non-empty array!');
    }
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const average = sum / array.length;
    return average;
  }
  console.log('averageFromArray', averageFromArray([1, 2, 3, 4, 5, 6]));

  // napisz funkcję, która przyjmuje 2 parametry i tworzy 2 wymiarową tablice wypełnioną 0 gdzie x i y towymiary 2 wymiarowej tablicy
  //   create2dArray(1,1) => [[0]]
  // create2dArray(1,2) => [[0, 0]]
  // create2dArray(2,2) => [[0, 0],[0, 0]]

  // const create2dArray = (x, y) => {
  //   const resultArray = [];
  //   for (let i = 0; i < x; i++) {
  //     const row = [];
  //     for (let j = 0; j < y; j++) {
  //       row.push(0); // [0]
  //       // 2ga iteracja 2giego for'a [0,0]
  //     }

  //     resultArray.push(row);
  //   }
  //   return resultArray;
  // };
  function create2dArray(x, y) {
    return Array.from({ length: x }, () => Array.from({ length: y }, () => 0));
  }
  console.log('create2dArray', create2dArray(3, 5));

  // napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w odwróconej kolejności
  // reverseFun([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
  // function reverseFun(x) {
  //   return x.reverse();
  // }
  function reverseFun(x) {
    const reversed = [];
    for (let i = x.length - 1; i >= 0; i--) {
      reversed.push(x[i]);
    }
    return reversed;
  }
  console.log('reverseFun', reverseFun([1, 2, 3, 4, 5]));
  // napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i wiekiem, i zwraca tablicę z samymi imionami osób
  // map
  // getNames([{name: 'John', age:20 },{name: 'Adam', age:24 }])) =>["John", "Emily", "Peter"]
  const object = [
    { name: 'John', age: 20 },
    { name: 'Adam', age: 24 },
  ];
  // const getNames = (obj) => {
  //   // object.map((obj) => obj.name);
  //   return obj.map(({ name }) => name);
  // };
  // const getNames = (obj) => obj.map(({ name }) => name);
  function getNames(obj) {
    // object.map((obj) => obj.name);
    return obj.map(({ name }) => name);
  }
  console.log(getNames(object));

  // napisz funkcje na sumowanie wieku
  // reduce
  // sumOfAge([{name: 'John', age:20 },{name: 'Adam', age:24 }])) => 44
  function sumOfAge(obj) {
    return obj.reduce((acc, curr) => acc + curr.age, 0);
  }
  console.log('sumOfAge', sumOfAge(object));

  // Napisz funkcję, która pobiera dwa napisy i sprawdza, czy są one anagramami
  // isAnagram("iceman", "cinema") => true
  // isAnagram("iceman", "cinemma") => false

  function isAnagram(firstWord, secondWord) {
    const firstWordArray = firstWord.split('').sort();
    const secondWordArray = secondWord.split('').sort();

    return firstWordArray.toString() === secondWordArray.toString()
      ? true
      : false;
  }
  console.log('isAnagram', isAnagram('iceman', 'cinema'));
  console.log('isAnagram', isAnagram('iceman', 'cinemma'));

  // Napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami, które występują w obu napisach.
  // commonLetters("Hello", "World") => ["l", "o"]
  function commonLetters(str1, str2) {
    const letters1 = new Set(str1);
    const arrayLetters2 = Array.from(new Set(str2));
    return Array.from(letters1).filter((letter) =>
      arrayLetters2.includes(letter)
    );
  }
  console.log('commonLetters', commonLetters('Hello', 'World'));

  //   Napisz funkcję zmieniającą podany string na camelCase
  // toCamelCase("Jakiś_długi text") -> "jakiśDługiText
  function toCamelCase(str) {
    // Podziel ciąg na słowa używając spacji, myślników i podkreśleń jako separatora
    const words = str.split(/[ \-_]/);
    const camelCaseWords = words.map((word, index) => {
      // Pierwsze słowo zastosowanie LowerCase do pomniejszenia pierwszej litery
      if (index === 0) {
        return word.toLowerCase();
      } else {
        // Pozostałe słowa 1 litera UpperCase pozostała część liter LowerCase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });

    return camelCaseWords.join('');
  }
  console.log('toCamelCase', toCamelCase('Jakiś_długi text'));

  // Zadanie 1: Filtruj parzyste liczby---------------------------------------
  // zastosuj filter

  const mojeLiczby = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // Funkcja, która przyjmuje tablicę liczb i zwraca nową tablicę zawierającą tylko parzyste liczby.
  function filtrujParzyste(liczby) {
    // Używamy metody filter() na przekazanej tablicy "liczby".
    // Funkcja zwrotna (callback) sprawdza, czy liczba jest parzysta, używając operatora modulo (%).
    // Jeśli reszta z dzielenia przez 2 wynosi 0, liczba jest parzysta i zostaje zachowana w wynikowej tablicy.
    return liczby.filter(function (liczba) {
      return liczba % 2 === 0;
    });
  }
  // Wywołujemy funkcję "filtrujParzyste()" i przekazujemy do niej tablicę "mojeLiczby".
  console.log(filtrujParzyste(mojeLiczby));

  // Zadanie 2: Podwój każdy element tablicy-------------------------------------
  // zastosuj map

  const mojaTablica = [1, 2, 3, 4, 5];

  function podwojElementy(tablica) {
    // Używamy metody map() do iteracji przez tablicę i zwrócenia nowej tablicy,
    // w której każdy element jest podwajany.

    const podwojoneElementy = tablica.map(function (element) {
      return element * 2;
    });
    return podwojoneElementy;
    // Zwracamy nową tablicę z podwojonymi elementami.
  }
  const podwojoneElementy = podwojElementy(mojaTablica);
  console.log(podwojoneElementy); // Wyświetli [2, 4, 6, 8, 10]

  // Zadanie 3: Znajdź najdłuższy wyraz---------------------------------
  // zastosuj reduce (w reduce stwórz if'a na sprawdzenie czy obecny wyraz jest "dłuższy"  od porównywanego)

  function znajdzNajdluzszyWyraz(table) {
    if (table.length === 0) {
      return null; // Zwracamy null, jeśli tablica jest pusta.
    }
    return table.reduce(function (najdluzszy, obecny) {
      // Porównujemy długości bieżącego wyrazu z najdłuższym wyrazem.
      if (obecny.length > najdluzszy.length) {
        return obecny; // Jeśli obecny jest dłuższy, zwracamy go.
      } else {
        return najdluzszy; // W przeciwnym razie zwracamy najdłuższy.
      }
    });
  }
  // Przykład użycia funkcji:
  const slowa = ['jabłko', 'banan', 'truskawka', 'gruszka'];
  const najdluzszyWyraz = znajdzNajdluzszyWyraz(slowa);
  console.log(najdluzszyWyraz); // Wyświetli: "truskawka"

  // Zadanie 4:  Oblicz sumę liczb parzystych----------------------------------
  // zastosuj reduce

  function sumaLiczbParzystych(tab) {
    return tab.reduce(function (accumulator, current) {
      if (current % 2 === 0) {
        return accumulator + current;
      }
      return accumulator;
    }, 0);
  }

  // Przykład użycia:
  const myTablica = [1, 2, 3, 4, 5, 6, 7, 8];
  const sumaParzystych = sumaLiczbParzystych(myTablica);
  console.log(sumaParzystych); // Wynik: 20 (2 + 4 + 6 + 8)
}

/* Zadanie 1: Filtruj parzyste liczby

function filterEvenNumbers(array) {

  return array.filter((n) => n % 2 == 0);

}



console.log('filterEvenNumbers', filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));



// // Zadanie 2: Podwój każdy element tablicy

function doubleElements(array) {

  const newArray = [];

  array.map((x) => newArray.push(x, x));

  return newArray;

}



console.log('doubleElements', doubleElements([1, 2, 3]));



function doubledElements(array) {

  return array.map((x) => x * 2);

}



// Zadanie 3: Znajdź najdłuższy wyraz



function longestWord(array) {

  const longest = array.reduce((longest, curr) => {

    if (curr.length > longest.length) return curr;

    else return longest;

  }, '');

  return longest;

}

console.log(longestWord(['numStr', 'coś', 'najdluzszyWyraz']));



// Zadanie 4:  Oblicz sumę liczb parzystych

let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const sumEvens = (numStr) => {

  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {

    if (i % 2 === 0) {

      sum = sum + numStr[i];

    }

  }

  return sum;

};



console.log(sumEvens(numStr));



function sumEven(array) {

  return array.reduce((acc, curr) => {

    if (curr % 2 === 0) {

      return acc + curr;

    } else return acc;

  }, 0);

}



console.log('sumEven', sumEven([1, 2, 3, 4, 7, 8]));

};
Zwiń

ma menu kontekstowe*/
