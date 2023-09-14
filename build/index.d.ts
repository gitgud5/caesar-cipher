import { CaesarInterface } from "./interface";
/**
 * Encrypts a message using the Caesar cipher.
 *
 * @param message - The message to encrypt. (default: "")
 * @param shift - The number of positions to shift each character (default: 3).
 * @returns The encrypted message.
 */
export declare function caesarEncrypt(message?: string, shift?: number): string;
/**
 * Decrypts an encrypted message using the Caesar cipher.
 *
 * @param encryptedMessage - The encrypted message to decrypt. (default: "")
 * @param shift - The number of positions to shift each character (default: 3).
 * @returns The decrypted message.
 */
export declare function caesarDecrypt(encryptedMessage?: string, shift?: number): string;
declare const caesar: CaesarInterface;
export default caesar;
