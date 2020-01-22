const express = require('express');
const router = require('.router.js')
const app = express();

const serverless = require('serverless-http');
const MongoClient = require('mongodb').MongoClient;

const mongoUser = 'sls-mongo-example';
const mongoDbName = 'test';
const mongoPass = 'n38bEp8lhWPt9Jbp';
const mongoConnStr = `mongodb+srv://${mongoUser}:${mongoPass}@sls-mongo-example-tdoka.mongodb.net/${mongoDbName}?retryWrites=true`;

const client = new MongoClient(mongoConnStr, {
    useNewUrlParser: true,
});
let db;

const createConnnection = async () => {
    await client.connect();
    db = client.db('test');
};


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/', router)


module.exports = app;
