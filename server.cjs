const express = require('express')
const bodyParser = require('body-parser')
const {connectToDb, getDb} = require('./dbconnections.cjs') 

const app = express()
app.use(bodyParser.json())

let db
connectToDb(function(error){
    if(error){
        console.log('could not establish function....')
        console.log(error)
    }else{
        app.listen(8000)
        db = getDb()
        console.log('listening on port 8000...')
    }
})

app.post('/add-entry', function(request, response){
    db.collection('ExpenseData').insertOne(request.body).then(function(){
        response.status(201).json({
            "status" : "Entery added succesfully"
        })
        }).catch(function(){
            response.status(500).json({
                "status" : "Entry not added"
            })
        })

    
})

app.get('/add-entry', function(request, response){
    db.collection('ExpenseData')
        .find()  
        .foreach(entry => entries.push(entry))
        .then(function(){
        response.status(200).json(entries)
        }).catch(function(){
            response.status(500).json({
                "status" : "Could not fetch documents"
            })
        })

    
})


