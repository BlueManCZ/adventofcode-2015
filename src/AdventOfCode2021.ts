#!/usr/bin/env phantomjs

declare const require: any;

// @ts-ignore
// eslint-disable-next-line no-undef
phantom.exit = function (): any {};

const solutions = require("./solutions/All").solutions;
console.log("Advent of code 2015 solutions:");

for (let counter = 0; counter < solutions.length;) {
    const day = Math.round(counter / 2) + 1;
    console.log(`\nDay ${day}:`);
    ["a", "b"].forEach(value => {
        console.log(`  ${value}) ${solutions[counter++]()}`);
    });
}

// @ts-ignore
// eslint-disable-next-line no-undef
phantom.exit();
