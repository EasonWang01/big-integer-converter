# #Install

```
yarn add big-integer-converter
```

# #Usage

```
const converter = require('big-integer-converter');
console.log(converter);

console.log(converter.binToDec('10000111110000111110000111100011111'));
console.log(converter.binToHex('10000111110000111110000111100011111'));

console.log(converter.hexToBin('0xa9999b777cccc7655555555ccccaaaa'));
console.log(converter.hexToDec('0xa9999b777cccc7655555555ccccaaaa'));

console.log(converter.decToBin('12309478210893472309186509231401892734'));
console.log(converter.decToHex('12309478210893472309186509231401892734'));
```