import { getColumnScores, getColumnAverages, getColumnDistributionMatrix, getNormalizedGuessDistribution, getGuessesDistributionMatrix } from "./stats";

describe('getColumnScores', () => {
    it('should evaluate', () => {
        const result = getColumnScores(['------']);
        expect(result).toStrictEqual([7,7,7,7,7,7]);
    });

    it('should evaluate', () => {
        const result = getColumnScores(['c-----','cc----','ccc---','cccc--','ccccc-','cccccc']);
        expect(result).toStrictEqual([1,2,3,4,5,6]);
    });

    it('should evaluate', () => {
        const result = getColumnScores(['c-----','cc----','ccc---','cccc--','ccccc-','cccccc'].reverse());
        expect(result).toStrictEqual([1,1,1,1,1,1]);
    });

    it('should evaluate', () => {
        const result = getColumnScores(['cccccc','cc----','ccc---','cccc--','ccccc-','cccccc'].reverse());
        expect(result).toStrictEqual([1,1,1,1,1,1]);
    });
});

describe('getColumnDistributionMatrix', () => {
    it.skip('should evaluate', () => {
        const averages = getColumnAverages({ 1: 6, 2: 6, 3: 6, 4: 9, 5: 8, 6: 8 }, 2);
        const result = getColumnDistributionMatrix(averages);
        expect(result).toStrictEqual([7,7,7,7,7,7]);
    });
});

describe('getGuessesDistributionMatrix', () => {
    it.skip('should evaluate', () => {
        const averages = getNormalizedGuessDistribution({ 1: 6, 2: 6, 3: 6, 4: 9, 5: 8, 6: 8 });
        const result = getGuessesDistributionMatrix(averages);
        expect(result).toStrictEqual([7,7,7,7,7,7]);
    });
});