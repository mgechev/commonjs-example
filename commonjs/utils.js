module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
module.exports.multiply = (a, b) => a * b;
module.exports.divide = (a, b) => a / b;

const { maxBy } = require('lodash-es');
module.exports.max = arr => maxBy(arr);
