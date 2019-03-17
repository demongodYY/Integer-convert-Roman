const table = {
  5: ['I', 'V', 'X'],
  50: ['X', 'L', 'C'],
  500: ['C', 'D', 'M']
}

const intToIString = (number) => {
  return new Array(number).fill('I').join('');
}

const mergeLetter = (str, numIndex) => {
  const length = str.length;
  const headLen = Math.floor(length / 10);
  const tailLen = length % 10;
  const headerArray = new Array(headLen).fill(table[numIndex][2]);
  switch (tailLen) {
    case 9:
      return headerArray.concat([`${table[numIndex][0]}${table[numIndex][2]}`]).join('');
    case 4:
      return headerArray.concat([`${table[numIndex][0]}${table[numIndex][1]}`]).join('');
    default:
      const tailArray = new Array(Math.floor(tailLen / 5)).fill(table[numIndex][1]).concat(str.substring(str.length - tailLen % 5).split(''));
      return headerArray.concat(tailArray).join('');
  }
}

const splitStr = (str, numIndex) => {
  const index = str.split('').findIndex((ele) => {
    return ele !== table[numIndex][0];
  })
  return index >= 0 ? [str.substring(0, index), str.substring(index)] : [str, ''];
}

const getRoman = (num) => {
  return mergeStr(splitStr(mergeStr(splitStr(mergeStr(splitStr(intToIString(num), 5), 5), 50), 50), 500), 500);
}

const mergeStr = (arr, numIndex) => {
  return mergeLetter(arr[0], numIndex) + arr[1];
}

module.exports = {
  intToIString,
  mergeLetter,
  mergeStr,
  splitStr,
  getRoman
}