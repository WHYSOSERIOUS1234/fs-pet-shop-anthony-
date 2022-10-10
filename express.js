let express = require('express')
const app = express()
const PORT = 3000
const {Client} = require('pg')
                        //protocol // username /pass /localH /port /name of db
const connectionString = "postgresql://postgres:cat@127.0.0.1:5432/pets";

//const { request } = require('express');
app.use(express.json())

const client = new Client({
    connectionString: connectionString, 
})
client.connect()

//ensuring server is running correctly
app.get('/' , (req, res) => {
    res.send('hello')
})

//pulling from pets database
app.get('/api/pets', (req, res, err) => {
client.query('SELECT * FROM pets;')
.then(result => {
    
    res.send(result.rows)
})
})

app.get('/api/pets/:id', (req,res) => {
const id = req.params.id
client.query(`SELECT * FROM pets WHERE id=${id};`)
.then(result => {
    res.send(result.rows)
})

})
// writes to database
app.post('/api/pets' , (req, res) => {
//assigning the json object variables to user input of the user
const {pet_name, kind , age} = req.body
//Inserting into database 
    client.query(`INSERT INTO pets(pet_name, kind, age) VALUES('${pet_name}', '${kind}', '${age}');`)
    //if it works send 
    res.status(200).send('created your data')
})


//patch 
app.patch('/api/pets/:id', (req, res) => {
    const { pet_name, age, kind } = req.body;
    let updateString = '';
    if (pet_name) {
      updateString = `pet_name = '${pet_name}'`
      client.query(`UPDATE pets SET ${updateString} WHERE ID = ${req.params.id} `)
    }
    if (age) {
      updateString = `age = '${age}'`
      client.query(`UPDATE pets SET ${updateString} WHERE ID = ${req.params.id} `)
    }
    if (kind) {
      updateString = `kind = '${kind}'`
      client.query(`UPDATE pets SET ${updateString} WHERE ID = ${req.params.id} `)
    }
    if (updateString.length === 0) {
      res.status(400).send('Bad request')
    }
    res.status(201).send(`Updated pet: ${req.params.id}`)
  })

//delete
app.delete('/api/pets/:id', (req, res) => {
    const id = req.params.id
    client.query(`DELETE FROM pets WHERE id=${id}`)
    res.status(200).send(`Deleted the pet at ${id}`)
})

//port my server is on
app.listen(PORT , () => {
    console.log('listening')
})

