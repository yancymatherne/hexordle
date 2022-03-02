import { Evaluation } from '../../types/guess.types';
import { evaluateKeyboardLetter, evaluateWord, getColumnDistributionMatrix, getColumnScores } from './evaluation';

describe('evaluateWord', () => {
    it('should evaluate no matched or misplaced letters', () => {
        const result = evaluateWord('abcdff', 'tester');
        expect(result).toBe('------');
    });

    it('should evaluate', () => {
        const result = evaluateWord('scetzz', 'tester');
        expect(result).toBe('m-mc--');
    });

    it('should evaluate', () => {
        const result = evaluateWord('tactti', 'tester');
        expect(result).toBe('c--c--');
    });

    it('should evaluate', () => {
        const result = evaluateWord('taetti', 'tester');
        expect(result).toBe('c-mc--');
    });

    it('should evaluate', () => {
        const result = evaluateWord('taetut', 'destet');
        expect(result).toBe('--mc-c');
    });

    it('should evaluate all misplaced', () => {
        const result = evaluateWord('tttabc', 'abcttt');
        expect(result).toBe('mmmmmm');
    });

    it('should evaluate', () => {
        const result = evaluateWord('ttttbc', 'abcttt');
        expect(result).toBe('mm-cmm');
    });
});

describe('evaluateKeyboardLetter', () => {
    it('should evaluate correct no previous', () => {
        const result = evaluateKeyboardLetter(Evaluation.CORRECT);
        expect(result).toBe(Evaluation.CORRECT);
    });

    it('should evaluate correct previously correct', () => {
        const result = evaluateKeyboardLetter(Evaluation.CORRECT, Evaluation.CORRECT);
        expect(result).toBe(Evaluation.CORRECT);
    });

    it('should evaluate correct previously misplaced', () => {
        const result = evaluateKeyboardLetter(Evaluation.CORRECT, Evaluation.MISPLACED);
        expect(result).toBe(Evaluation.CORRECT);
    });

    it('should evaluate correct previously absent', () => {
        const result = evaluateKeyboardLetter(Evaluation.CORRECT, Evaluation.ABSENT);
        expect(result).toBe(Evaluation.CORRECT);
    });

    it('should evaluate misplaced no previous', () => {
        const result = evaluateKeyboardLetter(Evaluation.MISPLACED);
        expect(result).toBe(Evaluation.MISPLACED);
    });

    it('should evaluate misplaced previously correct', () => {
        const result = evaluateKeyboardLetter(Evaluation.MISPLACED, Evaluation.CORRECT);
        expect(result).toBe(Evaluation.CORRECT);
    });

    it('should evaluate misplaced previously misplaced', () => {
        const result = evaluateKeyboardLetter(Evaluation.MISPLACED, Evaluation.MISPLACED);
        expect(result).toBe(Evaluation.MISPLACED);
    });

    it('should evaluate misplaced previously absent', () => {
        const result = evaluateKeyboardLetter(Evaluation.MISPLACED, Evaluation.ABSENT);
        expect(result).toBe(Evaluation.MISPLACED);
    });

    it('should evaluate absent no previous', () => {
        const result = evaluateKeyboardLetter(Evaluation.ABSENT);
        expect(result).toBe(Evaluation.ABSENT);
    });

    it('should evaluate absent previously correct', () => {
        const result = evaluateKeyboardLetter(Evaluation.ABSENT, Evaluation.CORRECT);
        expect(result).toBe(Evaluation.CORRECT);
    });

    it('should evaluate absent previously misplaced', () => {
        const result = evaluateKeyboardLetter(Evaluation.ABSENT, Evaluation.MISPLACED);
        expect(result).toBe(Evaluation.MISPLACED);
    });

    it('should evaluate absent previously absent', () => {
        const result = evaluateKeyboardLetter(Evaluation.ABSENT, Evaluation.ABSENT);
        expect(result).toBe(Evaluation.ABSENT);
    });
});

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
        const result = getColumnDistributionMatrix({ 1: 6, 2: 6, 3: 6, 4: 9, 5: 8, 6: 8 }, 2);
        expect(result).toStrictEqual([7,7,7,7,7,7]);
    });
});