function prepareInput1 (): string {
    const tools = require("../Tools");
    return tools.readInput("inputs/day_01.txt");
}

module.exports = {
    a: (): number => {
        const content = prepareInput1();
        return content.split("(").length - content.split(")").length;
    },

    b: (): number => {
        let count = 0;
        const content = prepareInput1();
        const array = content.split("");
        for (let floor = 0; floor >= 0;) floor += (array[count++] === "(") ? 1 : -1;
        return count;
    }
};
