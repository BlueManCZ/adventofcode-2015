function prepareInput2 (): number[][] {
    const tools = require("../Tools");
    const content = tools.readInput("inputs/day_02.txt");
    const rows = content.split("\n");
    return rows.map((row: string) => {
        if (!row) return [];
        const strings = row.split("x");
        return strings.map(function (item): number {
            return parseInt(item);
        });
    });
}

module.exports = {
    a: (): number => {
        const sizes = prepareInput2();
        return sizes.map((row: number[]) => {
            if (row.length !== 3) return 0;
            const areas = row.map(function (item, index): number {
                return item * row[(index + 1) % 3];
            });
            const m = Math.min(...areas);
            return 2 * areas.reduce((p, a) => p + a, 0) + m;
        }).reduce((p: number, a :number) => p + a, 0);
    },

    b: (): number => {
        const sizes = prepareInput2();
        return sizes.map((row: number[]) => {
            if (row.length !== 3) return 0;
            row.sort((a, b) => a - b);
            return 2 * row[0] + 2 * row[1] + row.reduce((p, a) => p * a, 1);
        }).reduce((p: number, a :number) => p + a, 0);
    }
};
