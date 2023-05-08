// #1

const reverseNum = (num) => {
  let number = parseFloat(num.toString().split("").reverse().join(""));
  return number;
};

// #2
function isPali(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

// #3
function stringCombo(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

// #4
function alphaOrder(str) {
  let array = str.split("").sort().join("");
  return array;
}

// #5
function capitalizeWord(str) {
  let arr = str.split(" ");
  return arr
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

// #6
function longestWord(str) {
  let wordLength = 0;
  let array = str.split(" ");
  let result;

  array.map((word) => {
    if (word.length > wordLength) {
      wordLength = word.length;
      result = word;
    }
  });
  return result;
}

// #7
function vowelCount(str) {
  let count = 0;
  let word = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

//#8
const isOdd = (num) => {
  if (num <= 1) return false;
  if (num % 2 === 0) return false;
  else return true;
};

// #9
function typeOf(input) {
  return typeof input;
}
// #10
function matrix(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    arr.push(row);
  }
  return arr;
}

// #11
function secondLowest(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let secondLowest = arr[1];
  let reversedArr = arr.reverse();
  let secondGreatest = reversedArr[1];

  return [secondLowest, secondGreatest];
}
// #12
function perfectNumber(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }
  if (temp === number && temp !== 0) {
    console.log("Perfect number.");
  } else {
    console.log("not a perfect number.");
  }
}

// #13
function factorial(num) {
  let factors = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  factors.push(num);

  return factors;
}

// #14
function amountTocoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}
// #15
function exp(b, n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = b * ans;
  }
  return ans;
}
// #16
function uniqueCharacters(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (result.includes(letter) === false) {
      result.push(letter);
    } else {
      continue;
    }
  }
  return result.join("");
}

//#17
function letterOccurance(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    result[letter] ? ++result[letter] : (result[letter] = 1);
  }
  return result;
}

// #18
function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.trunc((start + end) / 2);

  while (array[middle] !== value && start <= end) {
    if (array[middle] > value) end = array[middle] - 1;
    else start = array[middle] + 1;
    middle = Math.trunc((start + end) / 2);
  }
  return array[middle] === value ? middle : -1;
}

// #19
function isBigEnough(value) {
  return function (element, index, array) {
    return element >= value;
  };
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough(10));

// #20
function makeid(length) {
  var text = "";
  var char_list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}

// #21
function subset(arra, arra_size) {
  var result_set = [],
    result;

  for (var x = 0; x < Math.pow(2, arra.length); x++) {
    result = [];
    i = arra.length - 1;
    do {
      if ((x & (1 << i)) !== 0) {
        result.push(arra[i]);
      }
    } while (i--);

    if (result.length >= arra_size) {
      result_set.push(result);
    }
  }

  return result_set;
}
//#22
function charCount(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === char) {
      count++;
    }
  }
  return count;
}

// #23
function find_FirstNotRepeatedChar(str) {
  var array1 = str.split("");
  var result = "";
  var counter = 0;

  for (var x = 0; x < array1.length; x++) {
    counter = 0;

    for (var y = 0; y < array1.length; y++) {
      if (array1[x] === array1[y]) {
        counter += 1;
      }
    }

    if (counter < 2) {
      result = array1[x];
      break;
    }
  }
  return result;
}

// #24
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// #25

function longestCountryName(arr) {
  let tempCount = 0;
  let result;

  arr.map((country) => {
    if (tempCount < country.length) {
      tempCount = country.length;
      result = country;
    }
  });
  return result;
}

// #26
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let testString = "";
  [...s].forEach((char, i) => {
    let dupIndex = testString.indexOf(char);
    if (dupIndex > -1) {
      testString = testString.substring(dupIndex + 1) + char;
    } else {
      testString += char;
    }
    max = Math.max(testString.length, max);
  });
  return testString;
};

// #27
var longestPalindrome = function (string) {
  var length = string.length;
  var result = "";

  var centeredPalindrome = function (left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
      //expand in each direction.
      left--;
      right++;
    }

    return string.slice(left + 1, right);
  };

  for (var i = 0; i < length - 1; i++) {
    var oddPal = centeredPalindrome(i, i + 1);

    var evenPal = centeredPalindrome(i, i);

    if (oddPal.length > 1) console.log("oddPal: " + oddPal);
    if (evenPal.length > 1) console.log("evenPal: " + evenPal);

    if (oddPal.length > result.length) result = oddPal;
    if (evenPal.length > result.length) result = evenPal;
  }
  return result + " and its length is: " + result.length;
};
// #28
function addBook(id, cb) {
  cb();
}
function refreshBookList() {
  console.log("reset");
}

addBook(1, refreshBookList);
// #29

function fnName(fn) {
  return fn.name;
}
