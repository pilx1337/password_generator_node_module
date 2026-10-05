'use strict';

function generatePassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}
const args = process.argv.slice(2);

module.exports = generatePassword;
// const length = args[0] && !isNaN(parseInt(args[0])) ? parseInt(args[0]) : 12;
// console.log(`Generated Password (${length} chars):`, generatePassword(length));