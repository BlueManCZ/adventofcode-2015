const f = fs.open("inputs/day_01.txt", "r");
const content = f.read();

module.exports = {
    a: () => {
        return content.split("(").length - content.split(")").length;
    },

    b: () => {
        let count = 0;
        let array = content.split("");
        for (let floor = 0; floor >= 0;) floor += (array[count++] === "(") ? 1 : -1;
        return count;
    }
}
