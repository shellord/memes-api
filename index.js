const express = require('express')
const { meme } = require('memejs')

const app = express()



app.get("/", function (req, res) {
    return res.send("Dank Memes API")
})

app.get("/api", function (req, res) {
    return res.send("Dank Memes API")
})

app.get("/api/memes/:subreddit", function (req, res) {
    meme('crappydesign', function(err, data) {
        if (err) return res.send(err)
        return res.send(data)
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running")
})

module.exports = app;
