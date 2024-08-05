const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.MANGO_URI

const connexion = async()=>{
    try{ 
        const rep = await mongoose.connect(URL)
        console.log(`connexion reussie à la base de données nommée: ${rep.connection.name}`);

    } catch (error){
        console.log(error)
    }
 }
 // mongoose.connect(URL)
 
//.then(rep=> console.log('connexion reussie à la bd nommée : ${rep.connection.name})'
//.catch(error=>console.log(error))

 module.exports = connexion