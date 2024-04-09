const { checkData } = require('./check-data');

// Sample JSON data
const jsonData = {
    "PolicyName": "root",
    "PolicyDocument": {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "IamListAccess",
                "Effect": "Allow",
                "Action": [
                    "iam:ListRoles",
                    "iam:ListUsers"
                ],
                "Resource": "*"
            }
        ]
    }
};

// Calling the method to check input data
const result = checkData(jsonData);
console.log("Result of input data verification:", result);
