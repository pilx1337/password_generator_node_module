'use strict';

function generatePassword(length, useSpecialCharackters) {
    let chars = ''
    if (useSpecialCharackters)
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    else 
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charset = chars;
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

module.exports = generatePassword;
// const length = args[0] && !isNaN(parseInt(args[0])) ? parseInt(args[0]) : 12;
// console.log(`Generated Password (${length} chars):`, generatePassword(length));