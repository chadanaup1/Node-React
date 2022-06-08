const express = require('express')
const messageModel = require('../models/messageModel')

const Router = express.Router()

Router.get('/', async (req, res) => {
    messages = await messageModel.find({})
    return res.status(200).json(messages)
})

Router.post('/', async (req, res) => {
    const {message} = req.body

    const messageObj = new messageModel(message)
    await messageObj.save()
    return res.status(200).json(messageObj)
})

Router.put('/:id', 
   
    { json: {
        "name": "test",
        "label": "test2"
      }
    },
    
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            console.log(response.statusCode);
        }
    
})

Router.delete('/:id', (req, res) => {
    const { id } = req.params;
   
    const indes = projects.findIndex(p => p.id == id);
   
    projects.splice(indes, 1);
   
    return res.send();
   })

module.exports = Router