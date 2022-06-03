const express = require('express')
let bodyParser =  require('body-parser')

const todoRouter = require('./routes/todo')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
/*app.use(bodyParser.urlencoded({extended:true}))*/

app.get('/', function (request,response){
    response.status(200).send('It works !')
})
 
app.use('/todos', todoRouter)

const PORT = 4500

app.listen(4500, function () {
    console.log(`server is listening on http://localhost:${PORT}`)
})