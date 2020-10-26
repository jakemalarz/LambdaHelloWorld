/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// Include the AWS SDK module
const AWS = require('aws-sdk');

// set region if not set (as not set by the SDK by default)
if (!AWS.config.region) {
  AWS.config.update({
    region: 'us-east-1'
  });
}

// Instantiate a DynamoDB document client with the SDK
let dynamodb = new AWS.DynamoDB.DocumentClient();
// Use built-in module to get current date & time
let date = new Date();
// Store date and time in human-readable format in a variable
let now = date.toISOString();
// Define handler function, the entry point to our code for the Lambda service
// We receive the object that triggers the function as a parameter
exports.handler = async (event) => {
    // Extract values from event and format as strings
   // let name = JSON.stringify(`Hello from Lambda Hello World app, ${event.firstName} ${event.lastName}`);
    let fname = event.fname;
    let lname = event.lname;
    let msg = "Hello: " + fname;
    // Create JSON object with parameters for DynamoDB and store in a variable
    let params = {
        TableName:'LambdaHelloWorldTable-dev',
        Item: {
            'id': now,
            'fname' : fname,
            'lname' : lname
            
        }
    };
    // Using await, make sure object writes to DynamoDB table before continuing execution
   await dynamodb.put(params).promise();
    // Create a JSON object with our response and store it in a constant
    const response = {
        statusCode: 200,
        body: msg
    };
    // Return the response constant
    return response;
};