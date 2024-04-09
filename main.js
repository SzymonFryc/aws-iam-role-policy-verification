const { checkData, readJsonFromFile } = require('./check-data');

// Read data from file
const jsonData = readJsonFromFile('input.json');

// Sprawdź dane
if (jsonData) {
    const result = checkData(jsonData);
    console.log("Result of verifying input data:", result);
}