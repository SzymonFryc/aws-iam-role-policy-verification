const assert = require('assert');
const { checkData } = require('./checkData');

describe('Unit tests for the checkData function', function() {
    it('Should return false when the Resource field contains an asterisk (*)', function() {
        const jsonData = {
            "PolicyName": "root",
            "PolicyDocument": {
                "Version": "2024-04-09",
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
        const result = checkData(jsonData);
        assert.strictEqual(result, false);
    });

    it('Should return true when the Resource field does not contain an asterisk (*)', function() {
        const jsonData = {
            "PolicyName": "root",
            "PolicyDocument": {
                "Version": "2024-04-09",
                "Statement": [
                    {
                        "Sid": "IamListAccess",
                        "Effect": "Allow",
                        "Action": [
                            "iam:ListRoles",
                            "iam:ListUsers"
                        ],
                        "Resource": "arn:aws:iam::123:user/*"
                    }
                ]
            }
        };
        const result = checkData(jsonData);
        assert.strictEqual(result, true);
    });

    it('Should return false when the Resource field is missing', function() {
        const jsonData = {
            "PolicyName": "root",
            "PolicyDocument": {
                "Version": "2024-04-09",
                "Statement": [
                    {
                        "Sid": "IamListAccess",
                        "Effect": "Allow",
                        "Action": [
                            "iam:ListRoles",
                            "iam:ListUsers"
                        ]
                    }
                ]
            }
        };
        const result = checkData(jsonData);
        assert.strictEqual(result, false);
    });
});