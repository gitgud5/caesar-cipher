import { CaesarInterface } from "./interface";
export declare function caesarEncrypt(message: string, shift?: number): string;
export declare function caesarDecrypt(encryptedMessage: string, shift?: number): string;
declare const caesar: CaesarInterface;
export default caesar;
