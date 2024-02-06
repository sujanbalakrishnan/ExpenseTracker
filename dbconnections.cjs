const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callback){
     dbConnecetion = MongoClient.connect('mongodb://127.0.0.1:27017/ExpenseTracker').then(function(client){
           dbConnection = client.db()
           callback()
     }).catch(function(error){
        callback(error)
     })
}

function getDb(){
    return dbConnection
}

module.exports = {connectToDb,getDb}


