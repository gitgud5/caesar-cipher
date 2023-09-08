import { CaesarInterface } from "./interface";
/**
 *
 * @param message - This is the message to be encrypted
 * @param shift - How much shift in letters do you want? (Default is 3)
 * @returns - Encrypted message
 */
export declare function caesarEncrypt(message: string, shift?: number): string;
/**
 *
 * @param encryptedMessage - Message to be decrypted
 * @param shift - The shift for the message (Default is 3)
 * @returns - Decrypted Message
 */
export declare function caesarDecrypt(encryptedMessage: string, shift?: number): string;
declare const caesar: CaesarInterface;
export default caesar;
