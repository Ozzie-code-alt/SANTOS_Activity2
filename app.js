const http = require('http') // adds http library to variable
const port = 4001 


const server = http.createServer(function(req, res){
res.write("Hello World")
res.end()
})

server.listen(port,function(error){
    if(error){
        console.log('Something went wrong', error)
    }
    else{
        console.log("Server is Listening on port" + port)
    }
})