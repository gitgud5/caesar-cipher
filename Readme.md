
# 🌟 Caesar Cipher: The Ultimate Encryption Tool! 🌟

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Welcome to Caesar Cipher, the most fantastic encryption tool you've ever seen! 😄 Secure your messages with a touch of ancient Roman mystique. 🏛️

## What is Caesar Cipher?

Caesar Cipher is a simple yet effective encryption method used since the days of Julius Caesar. It involves shifting letters of the alphabet by a fixed number of positions to encode and decode messages. With this package, you can encrypt and decrypt your messages with ease.

## Features

✨ **Super Easy to Use:** Encrypt and decrypt messages effortlessly.
🔒 **Customizable Shift:** Choose your own shift value for added security.
🌐 **Alphabet-Agnostic:** Works with any alphabet, not just English.
💻 **Node.js Ready:** Use it in your Node.js projects right away.

## Installation

To get started with Caesar Cipher, simply install it in your Node.js project using npm:

```bash
npm install caesar-cipher
```

## How to Use

1. **Require the Package:**

   In your Node.js script, require the `caesar-cipher` package:

   ```javascript
   const { caesarCipherEncrypt, caesarCipherDecrypt } = require('caesar-cipher');
   ```

2. **Encrypt a Message:**

   Use the `caesarCipherEncrypt` function to encrypt your message. The default shift is set to 3 if not specified:

   ```javascript
   const encryptedMessage = caesarCipherEncrypt('Hello, World!', 5); // Shift by 5 positions
   console.log('Encrypted Message:', encryptedMessage);
   ```

3. **Decrypt a Message:**

   To decrypt the message, use the `caesarCipherDecrypt` function with the same shift value:

   ```javascript
   const decryptedMessage = caesarCipherDecrypt(encryptedMessage, 5); // Shift by 5 positions
   console.log('Decrypted Message:', decryptedMessage);
   ```

That's it! You're now ready to encrypt and decrypt messages like a secret agent from ancient Rome! 🕵️‍♂️

## License

This package is distributed under the [ISC License](https://opensource.org/licenses/ISC). Feel free to use it for any project, personal or commercial.

## Contribute

Found a bug? Have a great idea for an improvement? We'd love to hear from you! Head over to our [GitHub repository](https://github.com/gitgud5/caesar-cipher) and contribute to make Caesar Cipher even better.

---
Made with ❤️ by ZeroNine