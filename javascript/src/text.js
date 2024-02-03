const fs = require('fs');
const textPath = '../data/text/data.txt';

const run = (data) => {
    // Write the file
    const text = JSON.stringify(data);
    fs.writeFileSync(textPath, text);

    // Read the data from the file
    const textData = fs.readFileSync(textPath, 'utf8');
    console.log("TEXT: ", JSON.parse(textData));
}

module.exports = run;
