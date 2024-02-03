const CSV = require('./src/csv.js');
const XML = require('./src/xml.js');
const JSON = require('./src/json.js');
const TXT = require('./src/text.js');
const YML = require('./src/yaml.js');
const DATA = [{name: 'John'}, {name: 'Andrew'}];

CSV(DATA);
XML(DATA);
JSON(DATA);
TXT(DATA);
YML(DATA);
