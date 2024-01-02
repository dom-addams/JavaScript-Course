/* require fs module */
const fs = require('fs');

/* Print Fifth using beforeExit */
process.on('beforeExit', () => {
    console.log('Print Fifth');
});

/* Print Third using setTimeout */
setTimeout(() => console.log('Print Third'), 0);

/* Print Second using nextTick */
process.nextTick(() => console.log('Print Second'));

/* Print First using console.log */
console.log('Print First');

/* Print Fourth using readFile */
fs.readFile(__filename, () => {
    console.log('Print Fourth');
});
