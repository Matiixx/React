const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();

const db = monk('localhost/twitDB');
db.then(() => {
  console.log('Connected correctly to server')
})
const twits = db.get('twits');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "Connected"
    })
});

app.get('/app', (req, res) => {
    twits.find().then(twits => {
        res.json(twits);
    })
});

app.post('/app', (req, res) => {
    if(checkTwit(req.body))
    {
        const twit = {
            nick: req.body.nick.toString(),
            content: req.body.content.toString()
        }
        twits
            .insert(twit)
            .then(createdTwit => {
                res.json(createdTwit);
            });
    } else 
    {
        res.status(422);
        res.json({
            message: "Wrong twit"
        })
    }
});

app.listen(5000, () => {
    console.log("Connected");
})

function checkTwit(a)
{
    return a.nick && a.content && a.nick.toString().trim() !== '' && a.content.toString().trim() !== ''
}