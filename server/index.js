const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api", routes)

app.listen(8000, () => {
  console.log("Server listening on port 8000")
})