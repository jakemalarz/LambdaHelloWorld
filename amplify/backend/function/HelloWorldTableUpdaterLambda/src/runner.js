var myLambda = require('./index.js'),
    testJson = {
    "id": "456",
    "firstName": "Ada",
    "lastName": "Lovelace"
};
myLambda.handler(testJson).catch(function(err){console.log(err)})
