import cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';

const input = process.argv[2] || 'https://eslforums.com/6-letter-words/';

const output = process.argv[3] || 'src/lib/data/solutionList.json';

console.log('Scraping word list...');
console.log('Also removes plurals.')
console.log(`Input website: ${input}`);
console.log(`Output file: ${output}`);

const response = await fetch(input)
const data = await response.text();

const $ = cheerio.load(data);

const result = $('.entry-content li')
    .map((idx, el) => $(el).text())
    .get()
    .filter(word => word.length === 6)
    .filter(word => !word.endsWith('s') || word.endsWith('ss'))

const outputData = JSON.stringify(result, null, 2);

fs.writeFileSync(output, outputData);

console.log(`Found ${result.length} words.`);


