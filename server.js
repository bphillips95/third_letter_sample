const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express()
const router = express.Router()

app.use(bodyParser.json())

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch(() => console.log("DIDN'T CONNECT"))

// Use Routes
app.use('/',router)

const thirdLetter = (str) => {
    let newStr = ""
    for(let i=1;i<str.length;i++){
        if(i%3 === 0){
            newStr+=str[i-1]
        }
    }
    return newStr
}

app.post('/test', (req, resp) => {
    const str = req.body.string_to_cut
    resp.json(thirdLetter(str))
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))

module.exports = router