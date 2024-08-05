const express = require('express')
const connexion = require('./src/db/db')
const { createManyPerson, findByName, findFavorisFood, findById, findEditThenSave, updateAge, deletePerson, deleteManyPerson}= require('./src/controller/index')
const { deleteMany } = require('./src/model/person')
const app = express()
const port = 5001
app.get('/',(req,res)=>{
    res.send('Hello app')
})
connexion()
//createManyPerson()
//findByName('john doe')
//findFavorisFood('Burger')
//findById('66b0ffa7c2de4843e4ab3460')
//findEditThenSave('66b0ffa7c2de4843e4ab3460')
//updateAge('Anne')
//deletePerson('66b0ffa7c2de4843e4ab3460')
//deleteManyPerson()
app.listen(port,()=> {
    console.log(`Notre application tourne sur le port:http//localhost: ${port}`);
})