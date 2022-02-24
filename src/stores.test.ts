import { evaluateWord } from './stores';

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