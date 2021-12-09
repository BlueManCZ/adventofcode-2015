#!/usr/bin/env phantomjs

const _fs = require("fs");
const _env = require("system").env;
const _sol = require("./solutions/All").solutions;

if (!_env["AOC_SESSION"]) {
    console.log("Please export your session ID to an AOC_SESSION environmental variable.");
    console.log("https://github.com/wimglenn/advent-of-code-wim/issues/1");
    phantom.exit();
}

phantom.addCookie({
  "name"   : "session",
  "value"  : _env["AOC_SESSION"],
  "domain" : "adventofcode.com"
});

let counter = 0;

for (let i = 1; i <= _sol.length / 2; i++) {
    let url = `https://adventofcode.com/2015/day/${i}/input`;
    const page = require('webpage').create();
    page.open(url, function () {
        console.log("Downloading: " + `inputs/day_${(i < 10) ? "0" : ""}${i}.txt`);
        let data = page.evaluate(() => { return document.documentElement.innerText });
        _fs.write(`inputs/day_${(i < 10) ? "0" : ""}${i}.txt`, `${data}`, "w");
        counter++;
        if (counter == _sol.length / 2) phantom.exit();
    });
}
