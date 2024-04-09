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
    checkData: checkData
};