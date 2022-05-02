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
class VigenereCipheringMachine {
  

  isLetter (str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
  }

  isUpperCase (character) {
    if (character === character.toUpperCase()) {
      return true;
    }
    if (character === character.toLowerCase()) {
      return false;
    }
  }

  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if (!message || !key) throw new Error('Incorrect arguments!');
    
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
      for (let i = 0, j = 0; i < message.length; i++) {
        const c = message.charAt(i);
        if (this.isLetter(c)) {
            result += String.fromCharCode((c.charCodeAt(0) + key.charCodeAt(j) - 2 * 65) % 26 + 65);// A: 65
            j = ++j % key.length;
          } 
        else {
          result += c;
        }
        //j = ++j % key.length;
      }
      return result;
  }

  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    if (!message || !key) throw new Error('Incorrect arguments!');

    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < message.length; i++) {
      const c = message.charAt(i);
      if (this.isLetter(c)) {
          result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.charCodeAt(j))) % 26);
          j = ++j % key.length;
      } else {
        result += c;
      }
      
    }
    return result;
    }
  }
    const messageEncrypt = new VigenereCipheringMachine;
    
    /*encrypt('Hello World!', 'code')*/
    console.log(messageEncrypt.decrypt('HSVD AJAL ^^', 'behappy'))



module.exports = {
  VigenereCipheringMachine
};
