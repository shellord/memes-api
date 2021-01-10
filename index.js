const express = require('express')
const bodyParser = require('body-parser')
const { meme } = require('memejs')

const app = express()

app.use(bodyParser.json())


app.get("/", function (req, res) {
    return res.send("Dank Memes API")
})

app.get("/api", function (req, res) {
    return res.send("Dank Memes API")
})

app.get("/api/memes/:subreddit", function (req, res) {
    var times = 10;
    memes=[]
    for(var i=0; i < times; i++){
         meme(req.params.subreddit, function (err, data) {
        if (err) return res.send(JSON.stringify({ "status": 200, "error": true, "response": err }))
           memes.push(data)
         })
    }
    return res.send(JSON.stringify({ "status": 200, "error": null, "response": memes }))
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
})

module.exports = app;
