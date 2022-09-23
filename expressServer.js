const express = require('express')
const app = express()
const fs = require('fs')


const PORT = 8005
app.use(express.json())
 // All pets Main url. 
app.get("/pets", (request, response) => {
fs.readFile('./pets.json', 'utf-8', (error, data) => {
    if(error) {
       response.statusCode(500)
      response.send(error)
    } else {
        let pets =  JSON.parse(data)
        response.send(JSON.stringify(pets))

    }
})
})



app.get("/pets/:id", (request, response) => {
    var id = request.params.id
 
    fs.readFile('./pets.json', 'utf-8', (error, data) => {
        if(error) {
           response.statusCode(500)
          response.send(error)
        } else {
            let pets =  JSON.parse(data)
            let petId = pets[id]
            response.send(JSON.stringify(petId))
    
        }
    })
    })
   







   app.post("/pets", (request, response) => {
    let newPet = request.body
        fs.readFile('./pets.json', 'utf-8', (error, data) => {
            if(error) {
               response.statusCode(500)
              response.send(error)
            } else {
                let pets =  JSON.parse(data)
              pets.push(newPet)
                fs.writeFile('./pets.json' , JSON.stringify(pets), (error) =>{
                    if(error) {
                        response.statusCode(500)
                       response.send(error)
                     } else {
                        response.status(200)
                        response.send(newPet)

                     }

                   }
                )
        
            }
        })
        })
       
        


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})