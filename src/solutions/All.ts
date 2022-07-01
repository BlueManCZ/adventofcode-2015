declare const module: any;

const day1 = require("./Day01");
const day2 = require("./Day02");
const day3 = require("./Day03");

module.exports = {
    solutions: [
        day1.a, day1.b,
        day2.a, day2.b,
        day3.a, day3.b
    ]
};
