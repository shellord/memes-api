const { meme } = require('memejs');

meme(function (err, data) {
    if (err) return console.error(err);
    console.log(data);
});