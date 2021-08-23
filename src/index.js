exports.min = function min(array) {
    if (array == null || array.length == 0) return 0
    return array.reduce((a, b) => (b < a ? a = b : {}, a))
}

exports.max = function max(array) {
    if (array == null || array.length == 0) return 0
    return array.reduce((a, b) => (b > a ? a = b : {}, a))
}

exports.avg = function avg(array) {
    if (array == null || array.length == 0) return 0
    return (array.reduce((a, b) => a + b)) / array.length
}
