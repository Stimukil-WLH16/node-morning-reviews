const express = require('express')
const users = require('../users.json')

const app = express()

const PORT = 5150

app.get('/api/users', (req, res) => {
    res.status(200).send(users)
})

app.get('/api/user/:id', (req, res) => {
    const {id} = req.params
    if(!id){
        return res.status(404).send('unable to find resource')
    }
    
    const user = users.find(user => {
        return user.id === +id 
    })
    
    if(!user){
        return res.status(500).send('user not found')
    }

    res.status(200).send(user)

})

app.listen(PORT, () => console.log(`Listening to Van Halen ${PORT}`))