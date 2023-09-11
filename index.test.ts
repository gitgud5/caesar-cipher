import { caesarEncrypt, caesarDecrypt } from "./";

// Test cases for caesarEncrypt function
describe("caesarEncrypt", () => {
  it("should encrypt a message with the default shift (3)", () => {
    const message: string = "HELLO";
    const expected: string = "KHOOR";
    expect(caesarEncrypt(message)).toBe(expected);
  });

  it("should encrypt a message with a custom shift (5)", () => {
    const message: string = "HELLO";
    const shift: number = 5;
    const expected: string = "MJQQT";
    expect(caesarEncrypt(message, shift)).toBe(expected);
  });

  it("should handle lowercase letters", () => {
    const message: string = "hello";
    const expected: string = "khoor";
    expect(caesarEncrypt(message)).toBe(expected);
  });

  it("should handle spaces and special characters", () => {
    const message: string = "HELLO, FUN WORLD!";
    const expected: string = "KHOOR, IXQ ZRUOG!";
    expect(caesarEncrypt(message)).toBe(expected);
  });
});

// Test cases for caesarDecrypt function
describe("caesarDecrypt", () => {
  it("should decrypt an encrypted message with the default shift (3)", () => {
    const encryptedMessage: string = "KHOOR";
    const expected: string = "HELLO";
    expect(caesarDecrypt(encryptedMessage)).toBe(expected);
  });

  it("should decrypt an encrypted message with a custom shift (5)", () => {
    const encryptedMessage: string = "MJQQT";
    const shift: number = 5;
    const expected: string = "HELLO";
    expect(caesarDecrypt(encryptedMessage, shift)).toBe(expected);
  });

  it("should handle lowercase letters", () => {
    const encryptedMessage: string = "khoor";
    const expected: string = "hello";
    expect(caesarDecrypt(encryptedMessage)).toBe(expected);
  });

  it("should handle spaces and special characters", () => {
    const encryptedMessage: string = "KHOOR, IXQ ZRUOG!";
    const expected: string = "HELLO, FUN WORLD!";
    expect(caesarDecrypt(encryptedMessage)).toBe(expected);
  });
});
