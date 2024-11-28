require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "login": "Akash Mishra",
    "id": 11613311,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2023-09-09T03:27:44Z"
  }
  

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send(`It's twitter`)
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})