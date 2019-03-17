const romanLetterToInt = (letter) => {
  const table = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  if (!table[letter]) {
    throw Error('capacity should be positive integer')
  } else {
    return table[letter];
  }
}

const strSplit = (str) => {
  return str.split('').map(romanLetterToInt);
}

const subtractItem = (arr) => {
  return arr.map((element, index, arr) => {
    return index < arr.length - 1 && element < arr[index + 1] ? -element : element
  })
}

const getInt = (str) => {
  return subtractItem(strSplit(str)).reduce((acc, curr) => {
    return acc += curr;
  },0)
}

module.exports = {
  romanLetterToInt,
  strSplit,
  subtractItem,
  getInt
}