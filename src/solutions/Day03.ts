function prepareInput3 (): string {
    const tools = require("../Tools");
    return tools.readInput("inputs/day_03.txt");
}

module.exports = {
    a: (): number => {
        const content = prepareInput3();
        const houses: string[] = [];
        let x = 0; let y = 0;
        houses.push(`${x}/${y}`);
        const array: { [name: string]: number[] } = {
            v: [0, -1], ">": [1, 0], "^": [0, 1], "<": [-1, 0]
        };
        for (let i = 0; i < content.length; i++) {
            const char = content[i];
            x += array[char][0];
            y += array[char][1];
            const pos = `${x}/${y}`;
            if (houses.indexOf(pos) <= -1) {
                houses.push(pos);
            }
        }
        return houses.length;
    },

    b: (): number => {
        const content = prepareInput3();
        const houses: string[] = [];
        let x1 = 0; let y1 = 0;
        let x2 = 0; let y2 = 0;
        houses.push(`${x1}/${y1}`);
        const array: { [name: string]: number[] } = {
            v: [0, -1], ">": [1, 0], "^": [0, 1], "<": [-1, 0]
        };
        for (let i = 0; i < content.length; i++) {
            const char = content[i];
            const cond = i % 2;
            x1 += cond ? array[char][0] : 0;
            y1 += cond ? array[char][1] : 0;
            x2 += !cond ? array[char][0] : 0;
            y2 += !cond ? array[char][1] : 0;
            const pos = cond ? `${x1}/${y1}` : `${x2}/${y2}`;
            if (houses.indexOf(pos) <= -1) {
                houses.push(pos);
            }
        }
        return houses.length;
    }
};
