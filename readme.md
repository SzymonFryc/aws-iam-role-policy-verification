# Input Data Verification for AWS IAM Role Policy

## Description
This is a simple tool written in JavaScript for verifying input data in JSON format according to the AWS IAM Role Policy. The tool checks whether the "Resource" field in the first statement of the policy contains a single asterisk (*) and returns a boolean value true or false based on the verification result.

## Running Instructions
1. Clone or download this repository to your local machine.
2. Ensure you have Node.js runtime installed.
3. Open a terminal or command prompt and navigate to the project directory.
4. Install dependencies by running the command:

npm install

5. Copy your JSON data to the clipboard and paste it into the `input.json` file.
6. Run the verification process by executing the command:

node main.js

This will perform input data verification using the JSON data provided in the file.

Result
The verification process will output the result of input data verification in the console.

## Unit Tests
The `test.js` file contains a set of unit tests for the `checkData` function. The tests include:

- Checking if the function returns false when the "Resource" field contains an asterisk (*).
- Checking if the function returns true when the "Resource" field does not contain an asterisk (*).
- Checking if the function returns false when the "Resource" field is missing.