const ECTS = require('../lib/ects');

const ectsScores = [91, 80, 70, 60, 85, 45, 30];
const convertResult = ['A', 'C', 'D', 'E', 'B', 'F', 'F'];

test('converts test', () => {
    const resultConverts = ectsScores.map((score) => {
        const ectsConvertor = new ECTS(score);

        return ectsConvertor.ectsFromScore();
    });

    expect(resultConverts).toEqual(convertResult);
});
