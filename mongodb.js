//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//  const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: 'Make a phone'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch(() => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e09c19398a829331c838da5")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5e09d77bd5ebdd1bacb7c723")}, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to find document!')
    //     }
    //     console.log(result)
    // })

    // db.collection('tasks').find({
    //     completed: true
    // }).toArray((error, result) => {
    //     if (error) {
    //         return console.log('Unable to find completed task!')
    //     }
    //     console.log(result)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         "name": "Jen",
    //         "age":28
    //     }, {
    //         "name": "Gunther",
    //         "age": 38
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         "description": "Buy something",
    //         "completed": true
    //     }, {
    //         "description": "find a course",
    //         "completed": false
    //     }, {
    //         "description": "Make a phone",
    //         "completed": true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })
})