const _ = require("lodash");
const g = require("./files/gamma");
const b = require("./files/bar");
const long = require("./files/long");
const list = [5, 6];
console.log(_.map(list, (i) => i + 1));
console.log(g.list3e.map(list, (i) => i + 1));
console.log(b.list32e.map(list, (i) => i + 1));
console.log(long.calculateRectangleArea(5,10))