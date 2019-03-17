const chai = require('chai');
const romanToInt = require('../script/romanToInt.js');
const intToRoman = require('../script/intToRoman.js');
chai.should();

describe('hello spec', () => {
  it('works!', () => {
    true.should.equal(true)
  });
});

describe('Roman to Integer', () => {
  it('get roman letter to interger', () => {
    romanToInt.romanLetterToInt('X').should.equal(10);
    romanToInt.romanLetterToInt('I').should.equal(1);
    () => romanToInt.romanLetterToInt('P').should.throw();
  })
  it('split string to integer array', () => {
    romanToInt.strSplit('III').should.be.an('array');
    romanToInt.strSplit('III').should.have.members([1, 1, 1]);
    romanToInt.strSplit('LVIII').should.have.members([50, 5, 1, 1, 1]);
  })
  it('subtract left item', () => {
    romanToInt.subtractItem([50, 1, 10, 1, 1]).should.have.members([50, -1, 10, 1, 1]);
    romanToInt.subtractItem([10, 100, 1, 10, 1, 1]).should.have.members([-10, 100, -1, 10, 1, 1]);
    romanToInt.subtractItem([1000, 100, 1000, 10, 100, 1, 5]).should.have.members([1000, -100, 1000, -10, 100, -1, 5]);
  })
  it('get Integer from Roman string', () => {
    romanToInt.getInt('III').should.equal(3);
    romanToInt.getInt('IV').should.equal(4);
    romanToInt.getInt('IX').should.equal(9);
    romanToInt.getInt('XI').should.equal(11);
    romanToInt.getInt('MCMXCIV').should.equal(1994);
  })
})

describe('Integer to Roman', () => {
  it('integer to I string', () => {
    intToRoman.intToIString(3).should.equal('III');
    intToRoman.intToIString(4).should.equal('IIII');
    intToRoman.intToIString(5).should.equal('IIIII');
  })
  it('I string to VX string', () => {    
    intToRoman.mergeLetter(intToRoman.intToIString(0), 5).should.equal('');
    intToRoman.mergeLetter(intToRoman.intToIString(3),5).should.equal('III');
    intToRoman.mergeLetter(intToRoman.intToIString(4),5).should.equal('IV');
    intToRoman.mergeLetter(intToRoman.intToIString(5),5).should.equal('V');
    intToRoman.mergeLetter(intToRoman.intToIString(6),5).should.equal('VI');
    intToRoman.mergeLetter(intToRoman.intToIString(14),5).should.equal('XIV');
    intToRoman.mergeLetter(intToRoman.intToIString(19),5).should.equal('XIX');
    intToRoman.mergeLetter(intToRoman.intToIString(49),5).should.equal('XXXXIX');
  })
  it('split string', ()=> {
    intToRoman.splitStr('IIIIII',5).should.have.members(['IIIIII','']);
    intToRoman.splitStr('XXII',50).should.have.members(['XX','II']);
    intToRoman.splitStr('XIXII',50).should.have.members(['X','IXII']);
    intToRoman.splitStr('XVIII',50).should.have.members(['X','VIII']);
  })
  it('merge string', () => {
    intToRoman.mergeStr(['IIIIII',''],5).should.equal('VI');
    intToRoman.mergeStr(['IIII',''],5).should.equal('IV');
    intToRoman.mergeStr(['XXXXX','VII'],50).should.equal('LVII');
    intToRoman.mergeStr(['','IV'],5).should.equal('IV');
    intToRoman.mergeStr(['CCCCCCCCC','LXIVI'],500).should.equal('CMLXIVI');
  })
  it('transform num', () => {
    intToRoman.getRoman(4).should.equal('IV');
    intToRoman.getRoman(9).should.equal('IX');
    intToRoman.getRoman(12).should.equal('XII');
    intToRoman.getRoman(1994).should.equal('MCMXCIV');
  })
})