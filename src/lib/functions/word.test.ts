import { DateTime } from 'luxon';
import { getTodaysWordIndex, isValidWord } from './word';
import solutionList from '../data/solutionList.json';

describe('isValidWord', () => {
	it('should return true for a valid word', () => {
		const result = isValidWord('player');

		expect(result).toBe(true);
	});

	it('should return false for an invalid word', () => {
		const result = isValidWord('ffffff');

		expect(result).toBe(false);
	});
});

describe('getTodaysWordIndex', () => {
	it('should not repeat todays word index', () => {
		const indices: { [key: string]: number } = {};

		for (let i = 0; i < solutionList.length; i++) {
			const result = getTodaysWordIndex(DateTime.local().plus({ days: i }));
			indices[result] = indices[result] ? indices[result] + 1 : 1;
		}

		// console.log(solutionList.length)
		// console.log(Object.keys(indices).length)
		// console.log(Object.entries(indices).sort((a, b) => b[1] - a[1]))

		expect(Object.keys(indices)).toHaveLength(solutionList.length);
	});

	it('should repeat todays word indices exactly once over the next 2n days', () => {
		const indices: { [key: string]: number } = {};

		for (let i = 0; i < solutionList.length * 2; i++) {
			const result = getTodaysWordIndex(DateTime.local().plus({ days: i }));
			indices[result] = indices[result] ? indices[result] + 1 : 1;
		}

		expect(Object.keys(indices)).toHaveLength(solutionList.length);
		expect(Object.values(indices).every((x) => x === 2)).toBeTruthy();
	});
});
