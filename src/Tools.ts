const fs = require("fs");

module.exports = {
    readInput: (file: string): string => {
        try {
            return fs.open(file, "r").read();
        } catch (_e) {
            console.log(`Input file "${file}" not found, please execute DownloadInputs.js first.`);
            // @ts-ignore
            // eslint-disable-next-line no-undef
            phantom.exit();
        }
    }
};
