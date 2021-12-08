#!/usr/bin/env phantomjs

/* ENVIRONMENT */
declare const module: any;
declare const phantom: any;
declare const require: any;
const fs = require("fs");
phantom.exit = function (): any {};
/* ----------- */

let day1 = require("./solutions/Day01");

const solutions = [
    day1.a, day1.b
]

for (let counter = 0; counter < solutions.length;) {
    const day = Math.round(counter / 2) + 1;
    console.log(`\nDay ${day}:`);
    ["a", "b"].forEach(value => {
        console.log(`  ${value}) ${solutions[counter++]()}`)
    });
}

phantom.exit();
