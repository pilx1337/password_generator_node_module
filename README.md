# password_generator_node_module
A simple secure password generator .

## Installation 
```bash
npm install @g_steiner_school/password_generator
```

## Usage 

```javascript
const { generatePassword } = require('@g_steiner_school/password_generator')

const pwd = generatePassword(12) // 12 char long password with special characters
const pwd2 = generatePassword(16,false) // 16 char long password without special characters
```