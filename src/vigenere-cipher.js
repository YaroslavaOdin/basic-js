const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(arg) {
    this.isDirect = arg !== false;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    message = message.toUpperCase();
    let answer = [];
    while (key.length < message.length) {
      key = key.concat(key);
    }
    key = key.substr(0, message.length).toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) < 65 || message[i].charCodeAt(0) > 90) {
        answer.push(message[i]);
        message = message.substr(0, i) + message.slice(i + 1);
        i--;
      } else {
        let a = (message[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
        answer.push(String.fromCharCode(a + 65));
      }
    }
    return this.isDirect ? answer.join("") : answer.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }
    let answer = [];
    while (key.length < encryptedMessage.length) {
      key = key.concat(key);
    }
    key = key.substr(0, encryptedMessage.length).toUpperCase();
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].charCodeAt(0) < 65 || encryptedMessage[i].charCodeAt(0) > 90) {
        answer.push(encryptedMessage[i]);
        encryptedMessage = encryptedMessage.substr(0, i) + encryptedMessage.slice(i + 1);
        i--;
      } else {
        let a = (encryptedMessage[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;
        answer.push(String.fromCharCode(a + 65));
      }

    }
    return this.isDirect ? answer.join(""): answer.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
