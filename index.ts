import { CaesarInterface } from "./interface";

// Function for encryption
// Default shift is 3
/**
 * 
 * @param message - This is the message to be encrypted
 * @param shift - How much shift in letters do you want? (Default is 3)
 * @returns - Encrypted message
 */
export function caesarEncrypt(message: string, shift: number = 3): string {
  // Alright firstly, we are gonna make a string so that we can move the alphabets
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Function to shift the characters
  function shiftCharacter(char: string, shift: number): string {
    if (char === " ") {
      // return spaces if there are only spaces.
      return " ";
    }

    const isUpperCase: Boolean = char === char.toUpperCase();
    const charIndex: number = alphabet.indexOf(char.toUpperCase());

    // If character is not in the alphabet string, then we don't do anything to it
    if (charIndex === -1) {
      return char;
    }

    const shiftedIndex = (charIndex + shift) % 26;
    const shiftedChar: string = isUpperCase
      ? alphabet[shiftedIndex]
      : alphabet[shiftedIndex].toLowerCase();

    return shiftedChar;
  }

  let encryptedMessage: string = "";

  for (let i = 0; i < message.length; i++) {
    const char: string = message[i];
    const shiftedChar: string = shiftCharacter(char, shift);
    encryptedMessage += shiftedChar;
  }

  return encryptedMessage;
}

// Function for Decryption
// Default Shift value will be same as Encryption
/**
 * 
 * @param encryptedMessage - Message to be decrypted
 * @param shift - The shift for the message (Default is 3)
 * @returns - Decrypted Message
 */
export function caesarDecrypt(
  encryptedMessage: string,
  shift: number = 3
): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function shiftCharacter(char: string, shift: number) {
    if (char === " ") {
      return " ";
    }

    const isUpperCase: boolean = char === char.toUpperCase();
    const charIndex: number = alphabet.indexOf(char.toUpperCase());

    if (charIndex === -1) {
      return char;
    }

    // Here we use +26 so that the value is always a positive integer. cuz sometimes it may be negative.
    const shiftedIndex: number = (charIndex - shift + 26) % 26;
    const shiftedChar: string = isUpperCase
      ? alphabet[shiftedIndex]
      : alphabet[shiftedIndex].toLowerCase();

    return shiftedChar;
  }

  let decryptedMessage = "";

  for (let i = 0; i < encryptedMessage.length; i++) {
    const char: string = encryptedMessage[i];
    const shiftedChar: string = shiftCharacter(char, shift);
    decryptedMessage += shiftedChar;
  }

  return decryptedMessage;
}

const caesar: CaesarInterface = {
  caesarEncrypt,
  caesarDecrypt,
};

export default caesar;
