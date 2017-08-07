exports.decToBin = (str) => {
  var dec = str.toString().split(''), sum = [], hex = [], i, s
  while (dec.length) {
    s = 1 * dec.shift()
    for (i = 0; s || i < sum.length; i++) {
      s += (sum[i] || 0) * 10
      sum[i] = s % 2
      s = (s - sum[i]) / 2
    }
  }
  while (sum.length) {
    hex.push(sum.pop().toString(2))
  }
  return hex.join('')
}