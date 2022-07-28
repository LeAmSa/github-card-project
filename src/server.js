const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/users/:login', async (req, res) => {
    try {
        const { login } = req.params
        const { data } = await axios('https://api.github.com/users/' + login)
        console.log("Usuário capturado.")
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen('3000')