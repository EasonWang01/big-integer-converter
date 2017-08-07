exports.binToDec = (str) => {
    var dec = str.toString().split(''), sum = [], hex = [], i, s
    while (dec.length) {
        s = 1 * dec.shift()
        for (i = 0; s || i < sum.length; i++) {
            s += (sum[i] || 0) * 2
            sum[i] = s % 10
            s = (s - sum[i]) / 10
        }
    }
    while (sum.length) {
        hex.push(sum.pop().toString(10))
    }
    return hex.join('')
}