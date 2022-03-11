import fs from 'fs';

const input = process.argv[2] || 'static/6-letter-words.json';

const output = process.argv[3] || 'src/lib/data/guessList.json';

console.log('Processing dictionary...');
console.log('Mapping data structure from [{ word: "string" }] to ["string"]');
console.log(`Input file: ${input}`);
console.log(`Output file: ${output}`);

const initialDictionaryText = fs.readFileSync(input);

const initialDictionaryJson = JSON.parse(initialDictionaryText);

const processedDictionaryJson = initialDictionaryJson.map((obj) => obj.word);

const outputData = JSON.stringify(processedDictionaryJson, null, 2);

fs.writeFileSync(output, outputData);

console.log(`Processed ${processedDictionaryJson.length} words.`);
