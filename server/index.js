const express = require('express')
const userCtrl = require('./controller/userController')

const app = express()

const PORT = 5150

app.use(express.json())

app.get('/api/users', userCtrl.getUsers)
app.get('/api/users/:id', userCtrl.getUser)
app.post('/api/users', userCtrl.createUser)
app.put('/api/users/:id', userCtrl.updateUser)
app.delete('/api/users/:id', userCtrl.deleteUser)


app.listen(PORT, () => console.log(`Listening to Van Halen ${PORT}`))