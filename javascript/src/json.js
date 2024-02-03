const fs = require('fs');
const JSONPath = '../data/json/data.json';

const run = (data) => {
    // Write the file
    const json = JSON.stringify(data);
    fs.writeFileSync(JSONPath, json);

    // Read the data from the file
    const jsonData = fs.readFileSync(JSONPath, 'utf8');
    console.log("JSON: ", JSON.parse(jsonData));
}

module.exports = run;
