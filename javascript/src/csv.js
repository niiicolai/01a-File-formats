const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');
const CSVPath = '../data/csv/data.csv';

const run = (data) => {
    const dataCSV = [];

    // Write the file
    const csvWriter = createCsvWriter({
        path: CSVPath,
        header: [
            {id: 'name', title: 'Name'}
        ]
    });
    csvWriter.writeRecords(data)

    // Read the file
    fs.createReadStream(CSVPath)
        .pipe(csv())
        .on('data', (data) => dataCSV.push(data))
        .on('end', () => {
            console.log("CSV: ", dataCSV);
        });
}

module.exports = run;
