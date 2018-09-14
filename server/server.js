const express = require('express')

const app = express()

app.use(express.static(__dirname + '/../portfolio'))

app.listen(3001, () => console.log('Server listening on port: ', 3001))