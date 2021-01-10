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
    meme(req.params.subreddit, function (err, data) {
        if (err) return res.send(JSON.stringify({ "status": 200, "error": true, "response": err }))
        return res.send(JSON.stringify({ "status": 200, "error": null, "response": data }))
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
})

module.exports = app;
