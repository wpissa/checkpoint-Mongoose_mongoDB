const person = require('../model/person')

const persons = [
    {name:'Mary', age: 18, favoriteFoods:[ "Burger, Pizza"]},
    {name:'Mary', age: 35, favoriteFoods:[ "Burger, Pizza, Salade"]},
    {name:'Anne', age: 8, favoriteFoods:[ "Lait, Pizza"]},
]

const createManyPerson = async()=>{
    try{
        const rep = await person.create(persons)
        console.log(`Utilisateur enregistré avec succès:${rep}`);{rep}
    } catch(error){
        console.log(`erreur lors de l'enregistrement : `, error);
    }
}



const findByName = async(name)=> {
    try {
        const  rep = await person.find({name: name })
        console.log( `Utlisateur trouvé: ${rep}`);
    } catch (error) {
        console.log (`Erreur lors de la recherche:`, error)
    }
 }
 const findFavorisFood = async(food)=> {
    try {
        const rep = await person.findOne({favoriteFoods: food})
        console.log( `Utilisateur ayant : ${food} comme plat favoris est : ${rep}`);
    } catch (error) {
        console.log(`Erreur lors de recherche :` , error)
    }
    
 }
 const findById = async(id)=> {
    try {
        const rep = await person.findById(id)
        console.log( `Utilisateur ayant pour id: ${id} est : ${rep}`);
    } catch (error) {
        console.log(`Erreur lors de recherche :` , error)
    }
    
 }
 const findEditThenSave = async(personId)=> {
    try {
        const rep = await person.findById(personId)
        console.log( 'avant : ', rep);
        rep.favoriteFoods.push('hamburger')
        const dataUpdate = await rep.save()
        console.log('Après : ', dataUpdate)
    } catch (error) {
        console.log(`Erreur lors de recherche :` , error)
    }
    
 }

 const updateAge = async(personName)=>{
    try {
        const rep = await person.findOneAndUpdate({name: personName}, {$set:{age:20}}, {new: true})
        console.log('Modification reussie:', rep)
    } catch (error) {
        console.log(' Erreur lors de la modification', error)
    }
 }
 
 const deletePerson = async(id)=>{
    
     try {
        const rep = await person.findByIdAndDelete(id)
        console.log('suppression réussie :', rep)
     } catch (error) {
        console.log(' Echec de la suppression', error);
     }
 }

 
const deleteManyPerson = async()=>{
   
    try {
       const rep = await person.deleteMany({ name: 'Mary'})
       console.log('suppression réussie :', rep)
    } catch (error) {
       console.log(' Echec de la suppression', error);
    }
}


module.exports ={
createManyPerson,
findByName,
findFavorisFood,
findById,
findEditThenSave,
updateAge,
deletePerson,
deleteManyPerson
  
}