## Express JS and MongoDB in AWS lambda

This is a MERN stack app deploy in AWS Lambda using Serverless JS. It can run locally as well as deploy in AWS lambda.

Run and test the app locally
````javascript
npm install
npm start
````
#### About the files and folders
* lambda.js - File which is called by AWS lambda
* localServer.js - Run the app on localhost
* src/app.js - Your App logic
* serverless.yml - Lambda function configration 

#### Deployment
Run the following command to deploy the app as AWS Lambda function
````javascript
npm run deploy
````

#### Reference
* [express-aws-lambda](https://github.com/ashiqsultan/express-aws-lambda)
* [serverless-managed-db-examples](https://github.com/mattwelke/serverless-managed-db-examples/tree/master/aws-lambda-mongodb-atlas)

