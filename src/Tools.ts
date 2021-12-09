const fs = require("fs");

module.exports = {
    readInput: (file: string) => {
        try {
            return fs.open(file, "r").read();
        } catch (_e) {
            console.log(`Input file "${file}" not found, please execute DownloadInputs.js first.`);
            phantom.exit();
        }
    }
}
