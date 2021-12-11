declare const module: any;

const day1 = require("./Day01");
const day2 = require("./Day02");

module.exports = {
    solutions: [
        day1.a, day1.b,
        day2.a, day2.b
    ]
};
