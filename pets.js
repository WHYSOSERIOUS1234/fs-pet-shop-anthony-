const fs = require('fs');
let pets;
let command = process.argv[2]
if(process.argv.length < 3) {
    console.error(new Error('Usage: node pets.js [read | create | update | destroy]'))
}


 fs.readFile('./pets.json', 'utf8' , (error,data) =>{
    if(error) {
         console.error(new Error('Usage: node pets.js [read | create | update | destroy]'))
     } else  {
        pets =  JSON.parse(data)
       
         for(let i = 0; i < pets.length; i++ ) {
            if(command == 'read') {
                console.log(pets)
                break;
            }
             if(command == 'read' + i) {
                 console.log(pets[i])
                 break;
        } 
         }
         
        let pets2 =  {age: Number(process.argv[3]), kind: process.argv[4], name: process.argv[5]}
        pets.push(pets2)
    
        fs.writeFile("./pets.json", JSON.stringify(pets),(err, data) => {
            if(command == 'create') {
          console.log(pets)
        }})
        module.exports = pets
      }})
     





