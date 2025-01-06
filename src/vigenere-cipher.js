const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// 65 - 90
class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
    this.MIN_LETTER_INDEX = 65;
    this.MAX_LETTER_INDEX = 90;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    // if (typeof message !== 'string', typeof key !== 'string') {
    //   throw new Error('Incorrect arguments!');
    // }
    if (key.length < message.length) {
      key = key.padEnd(message.length, key);
    }
    key = key.toUpperCase();
    message = message.toUpperCase();

    let messageArr = message.split('');
    let resultArr = [];
    let keyCount = 0;
    for (let i = 0; i < messageArr.length; i += 1) {
      if (messageArr[i].charCodeAt(0) < this.MIN_LETTER_INDEX || messageArr[i].charCodeAt(0) > this.MAX_LETTER_INDEX) {
        resultArr.push(messageArr[i]);
      } else {
        let a = messageArr[i].charCodeAt(0) - this.MIN_LETTER_INDEX;
        let b = key[keyCount].charCodeAt(0) - this.MIN_LETTER_INDEX;
        let c = a + b + this.MIN_LETTER_INDEX;
        if (c > this.MAX_LETTER_INDEX) {
          c = c - this.MAX_LETTER_INDEX + this.MIN_LETTER_INDEX - 1;
        }
        resultArr.push(String.fromCharCode(c));
        keyCount += 1;
        let d = 'aaa';
      }
    }

    if (this.direct) {
      return resultArr.join('');
    } else {
      return resultArr.reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    // if (typeof encryptedMessage !== 'string', typeof key !== 'string') {
    //   throw new Error('Incorrect arguments!');
    // }
    if (key.length < encryptedMessage.length) {
      key = key.padEnd(encryptedMessage.length, key);
    }
    key = key.toUpperCase();
    encryptedMessage = encryptedMessage.toUpperCase();

    let messageArr = encryptedMessage.split('');
    let resultArr = [];
    let keyCount = 0;
    for (let i = 0; i < encryptedMessage.length; i += 1) {
      if (encryptedMessage[i].charCodeAt(0) < this.MIN_LETTER_INDEX || messageArr[i].charCodeAt(0) > this.MAX_LETTER_INDEX) {
        resultArr.push(messageArr[i]);
      } else {
        let a = messageArr[i].charCodeAt(0) - this.MIN_LETTER_INDEX;
        let b = key[keyCount].charCodeAt(0) - this.MIN_LETTER_INDEX;
        let c = a - b + this.MIN_LETTER_INDEX;
        if (c > this.MAX_LETTER_INDEX) {
          c = c - this.MAX_LETTER_INDEX + this.MIN_LETTER_INDEX - 1;
        }
        if (c < this.MIN_LETTER_INDEX) {
          c = this.MAX_LETTER_INDEX - (b - a) + 1;
        }
        resultArr.push(String.fromCharCode(c));
        keyCount += 1;
        let d = 'aaa';
      }
    }
    if (this.direct) {
      return resultArr.join('');
    } else {
      return resultArr.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
