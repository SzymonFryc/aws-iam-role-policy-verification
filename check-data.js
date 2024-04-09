const fs = require('fs');

// Method to read JSON data from a file
function readJsonFromFile(filePath) {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error("Error reading JSON data from file:", error);
        return null;
    }
}

// Method to verify input data in JSON format
function checkData(jsonData) {
    try {
        const resource = jsonData.PolicyDocument.Statement[0].Resource;
        if (resource === "*") {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error("Error verifying input data:", error);
        return false;
    }
}

module.exports = {
    checkData: checkData,
    readJsonFromFile: readJsonFromFile
};