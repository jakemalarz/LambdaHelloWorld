var myLambda = require('./index.js'),
    testJson = {
    "fname": "Chris",
    "lname": "Smith"
};
myLambda.handler(testJson).catch(function(err){console.log(err)})
