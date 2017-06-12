//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err) {
        return console.log('Connection Error:', err.message);
    }
    console.log('Connected to', db.databaseName);

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert', err.message);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to...', err);
    })

    db.close();
});