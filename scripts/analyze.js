import fs from 'fs';

const input = process.argv[2] || 'src/lib/data/common-6-letter-words.json';

console.log('Analyzing dictionary...');
console.log('View some stats on the dictionary to help with curating.');
console.log(`Input file: ${input}`);

const initialDictionaryText = fs.readFileSync(input);

const dictionary = JSON.parse(initialDictionaryText);

console.log(`Total words: ${dictionary.length}`);

const endInS = dictionary.filter((word) => word.endsWith('s'));
console.log(`End in s: ${endInS.length}`);

const endInSs = dictionary.filter((word) => word.endsWith('ss'));
console.log(`End in ss: ${endInSs.length}`);

const endInD = dictionary.filter((word) => word.endsWith('d'));
console.log(`End in d: ${endInD.length}`);

const endInEd = dictionary.filter((word) => word.endsWith('ed'));
console.log(`End in ed: ${endInEd.length}`);

const endInIng = dictionary.filter((word) => word.endsWith('ing'));
console.log(`End in ing: ${endInIng.length}`);

const histogram = [{}, {}, {}, {}, {}, {}];

dictionary
	.filter((word) => !word.endsWith('s') || word.endsWith('ss'))
	.forEach((word) => {
		word.split('').forEach((letter, j) => {
			const current = histogram[j][letter];
			histogram[j][letter] = current ? current + 1 : 1;
		});
	});

console.log(`1\t2\t3\t4\t5\t6`);
for (let i = 0; i < 26; i++) {
	const row = histogram.map(
		(column, ci) => Object.entries(column).sort((a, b) => b[1] - a[1])[i] || ''
	);
	console.log(row.join('\t'));
}
