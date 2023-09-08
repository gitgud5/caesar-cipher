/**
 * CaesarCipher interface for encryption and decryption functions.
 */
export interface CaesarInterface {
    /**
     * Encrypts a message using the Caesar cipher.
     *
     * @param message - The message to encrypt.
     * @param shift - The number of positions to shift each character (default: 3).
     * @returns The encrypted message.
     */
    caesarEncrypt(message: string, shift?: number): string;
    /**
     * Decrypts an encrypted message using the Caesar cipher.
     *
     * @param encryptedMessage - The encrypted message to decrypt.
     * @param shift - The number of positions to shift each character (default: 3).
     * @returns The decrypted message.
     */
    caesarDecrypt(encryptedMessage: string, shift?: number): string;
}
