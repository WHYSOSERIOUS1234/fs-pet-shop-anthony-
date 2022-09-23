
const http = require('http');
const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    var pets = require('./pets.js')
    
    res.setHeader('Content-Type', 'application/json')
    for(let i = 0; i < pets.length; i++) {
        if ( req.method == 'GET' &&req.url == '/pets') {
            
          console.log(res.end(JSON.stringify(pets)))
     
           
        }
        if ( req.method == 'GET' && req.url == '/pets'+ '/' + `${i}`) {
      
         res.end(JSON.stringify(pets[i]))
         break;
         } else if(req.url == null){
          throw new error('oops that doesn"t exist')
         }
        }})  



//     let url = 
//     if (req.method === 'GET' && req.url.split() === '/pets') {
//         var pets = require('./pets.js')
//         var petsJSON = JSON.stringify(pets)
//         res.setHeader('Content-Type', 'application/json');
//         res.end(petsJSON);
//     }
//     else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end('Not found');
//     }
// });

server.listen(port, function () {
    console.log('Listening on port', port);
});
