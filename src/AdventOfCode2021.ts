#!/usr/bin/env phantomjs

/* TS ENVIRONMENT */
declare const module: any;
declare const phantom: any;
declare const require: any;
phantom.exit = function (): any {};
/* ----------- */

const tools = require("./Tools");
const solutions = require("./solutions/All").solutions;
console.log("Advent of code 2015 solutions:");

for (let counter = 0; counter < solutions.length;) {
    const day = Math.round(counter / 2) + 1;
    console.log(`\nDay ${day}:`);
    ["a", "b"].forEach(value => {
        console.log(`  ${value}) ${solutions[counter++]()}`)
    });
}

phantom.exit();
