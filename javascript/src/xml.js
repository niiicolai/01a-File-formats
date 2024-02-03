const { XMLParser, XMLBuilder} = require("fast-xml-parser");
const XMLWriter = require('xml-writer');
const fs = require('fs');
const XMLPath = '../data/xml/data.xml';

const run = (data) => {
    // Write the file
    const xw = new XMLWriter;
    xw.startDocument();
    xw.startElement('data');
    data.forEach((item) => {
        xw.startElement('item');
        xw.writeElement('name', item.name);
        xw.endElement();
    });
    xw.endElement();
    fs.writeFileSync(XMLPath, xw.toString());

    // Read the data from the file
    const xml = fs.readFileSync(XMLPath, 'utf8');
    const parser = new XMLParser();
    let jObj = parser.parse(xml);
    const builder = new XMLBuilder();
    const xmlContent = builder.build(jObj);
    console.log("XML: ", xmlContent, jObj.data);
}

module.exports = run;