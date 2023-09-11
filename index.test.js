const { caesarEncrypt, caesarDecrypt } = require("./");

// Test cases for caesarEncrypt function
describe("caesarEncrypt", () => {
  it("should encrypt a message with the default shift (3)", () => {
    const message = "HELLO";
    const expected = "KHOOR";
    expect(caesarEncrypt(message)).toBe(expected);
  });

  it("should encrypt a message with a custom shift (5)", () => {
    const message = "HELLO";
    const shift = 5;
    const expected = "MJQQT";
    expect(caesarEncrypt(message, shift)).toBe(expected);
  });

  it("should handle lowercase letters", () => {
    const message = "hello";
    const expected = "khoor";
    expect(caesarEncrypt(message)).toBe(expected);
  });

  it("should handle spaces and special characters", () => {
    const message = "HELLO WORLD!";
    const expected = "KHOOR ZRUOG!";
    expect(caesarEncrypt(message)).toBe(expected);
  });
});

// Test cases for caesarDecrypt function
describe("caesarDecrypt", () => {
  it("should decrypt an encrypted message with the default shift (3)", () => {
    const encryptedMessage = "KHOOR";
    const expected = "HELLO";
    expect(caesarDecrypt(encryptedMessage)).toBe(expected);
  });

  it("should decrypt an encrypted message with a custom shift (5)", () => {
    const encryptedMessage = "MJQQT";
    const shift = 5;
    const expected = "HELLO";
    expect(caesarDecrypt(encryptedMessage, shift)).toBe(expected);
  });

  it("should handle lowercase letters", () => {
    const encryptedMessage = "khoor";
    const expected = "hello";
    expect(caesarDecrypt(encryptedMessage)).toBe(expected);
  });

  it("should handle spaces and special characters", () => {
    const encryptedMessage = "KHOOR ZRUOG!!";
    const expected = "HELLO WORLD!!";
    expect(caesarDecrypt(encryptedMessage)).toBe(expected);
  });
});
