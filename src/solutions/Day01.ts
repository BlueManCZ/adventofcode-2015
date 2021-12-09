module.exports = {
    a: () => {
        let content = tools.readInput("inputs/day_01.txt");
        return content.split("(").length - content.split(")").length;
    },

    b: () => {
        let count = 0;
        let content = tools.readInput("inputs/day_01.txt");
        let array = content.split("");
        for (let floor = 0; floor >= 0;) floor += (array[count++] === "(") ? 1 : -1;
        return count;
    }
}
