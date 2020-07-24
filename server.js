const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const cors = require('cors')
const app = express()

// BodyParser Middleware
app.use(bodyParser.json())
// Allowing client-side to connect
app.use(cors())

// Connect to MongoDB
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch(() => console.log("DIDN'T CONNECT"))

// Use Routes
app.use('/test', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))