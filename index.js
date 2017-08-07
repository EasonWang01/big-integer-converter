#! /usr/bin/env node

module.exports = {
  binToDec: require('./lib/binToDec').binToDec,
  binToHex: require('./lib/binToHex').binToHex,

  hexToDec: require('./lib/hexToDec').hexToDec,
  hexToBin: require('./lib/hexToBin').hexToBin,

  decToBin: require('./lib/decToBin').decToBin,
  decToHex: require('./lib/decToHex').decToHex,
}

