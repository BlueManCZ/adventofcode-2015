function prepareInput1() {
    let content = tools.readInput("inputs/day_02.txt");
    let rows = content.split("\n");
    return rows.map((row: string) => {
        if (!row) return [];
        const strings = row.split("x");
        return strings.map(function (item): number {
            return parseInt(item);
        });
    });
}

module.exports = {
    a: () => {
        const sizes = prepareInput1();
        return sizes.map((row: number[]) => {
            if (row.length != 3) return 0;
            const areas = row.map(function (item, index): number {
                return item * row[(index + 1) % 3];
            });
            let m = Math.min(...areas);
            return 2 * areas.reduce((p, a) => p + a, 0) + m;
        }).reduce((p: number, a :number) => p + a, 0);
    },

    b: () => {
        const sizes = prepareInput1();
        return sizes.map((row: number[]) => {
            if (row.length != 3) return 0;
            row.sort((a, b) => a - b);
            return 2 * row[0] + 2 * row[1] + row.reduce((p, a) => p * a, 1);
        }).reduce((p: number, a :number) => p + a, 0);
    }
}
