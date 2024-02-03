import pandas as pd
import yaml

DATA = [
    {"name": "John"},
    {"name": "Doe"}
]

if __name__ == "__main__":
    data = pd.DataFrame(DATA)

    csv_path = "../data/csv/data.csv"
    json_path = "../data/json/data.json"
    text_path = "../data/text/data.txt"
    xml_path = "../data/xml/data.xml"
    yaml_path = "../data/yaml/data.yaml"

    # Write data
    data.to_xml(xml_path)
    data.to_csv(csv_path, index=False)
    data.to_json(json_path, orient="records")
    with open(text_path, "w") as file: file.write(data.to_string(index=False))
    with open(yaml_path, "w") as file: yaml.dump(DATA, file)

    # Read data
    dataXML = pd.read_xml(xml_path)
    dataCSV = pd.read_csv(csv_path)
    dataJSON = pd.read_json(json_path)
    with open(text_path, "r") as file: dataTXT = file.read()
    with open(yaml_path, "r") as file: dataYAML = yaml.safe_load(file)        

    # Print data
    print("XML Data:\n", dataXML, "\n")
    print("CSV Data:\n", dataCSV, "\n")
    print("JSON Data:\n", dataJSON, "\n")
    print("Text Data:\n", dataTXT, "\n")
    print("YAML Data:\n", dataYAML, "\n")
