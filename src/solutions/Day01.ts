let tools = require("../Tools");

function input1(): string {
    return tools.readInput("inputs/day_01.txt");
}

module.exports = {
    a: () => {
        let content = input1();
        return content.split("(").length - content.split(")").length;
    },

    b: () => {
        let count = 0;
        let content = input1();
        let array = content.split("");
        for (let floor = 0; floor >= 0;) floor += (array[count++] === "(") ? 1 : -1;
        return count;
    }
}
