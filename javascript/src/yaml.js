const fs = require('fs')
const YAML = require('yaml')
const yamlPath = '../data/yaml/data.yaml'

const run = (data) => {
    // Write the file
    const yaml = YAML.stringify(data)
    fs.writeFileSync(yamlPath, yaml)

    // Read the data from the file
    const yamlData = fs.readFileSync(yamlPath, 'utf8')
    console.log("YAML: ", YAML.parse(yamlData))
}

module.exports = run
