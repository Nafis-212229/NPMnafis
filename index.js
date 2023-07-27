console.log('nafis in terminal');
var format = require('date-format');

var fa= format.asString('hh:mm:ss.SSS', new Date()); // just the time
console.log(fa);