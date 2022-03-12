const express = require('express');
const cors = require('cors');
const monk = require('monk');
const app = express();
const ID_length = 16;
app.use(cors());
app.use(express.json());

const db = monk('localhost/reactCounterDB');

db.then(() => {
    console.log('Connected correctly to server')
})
db.options = { 
    safe    : true,
    castIds : false
};

const counter = db.get('count');

app.get('/', (req, res) => {
    res.json({
        message: "Connected"
    })
});

app.get('/app/getID', (req, res) => {
    const newID = generateNewID(ID_length);
    res.json({
        newID
    })
});

app.get('/app', (req, res) => {
    console.log(req.query)
    counter.findOne({ _id: req.query.checkID}).then(count => {
        if(count == null)
        {
            const reqBody = {
                _id: req.query.checkID,
                count: 0
            }
            counter
            .insert(reqBody)
            .then(inserted => {
                res.status(200);
                res.json(inserted);
            })
        } else
        {
            res.json(count);
        }
    })
});

app.listen(5000, () => {
    console.log("Listening on http://localhost:5000");
});

app.post('/app', (req, res) => {
    //console.log(req.body)
    const reqBody = {
        _id: req.body._id,
        count: parseInt(req.body.count.toString())
    }
    console.log(reqBody)
    if(reqBody.count)
    {
        /*counter
            .insert(reqBody)
            .then(inserted => {
                res.status(200);
                res.json(inserted);
            })*/
        counter

        counter.update({ _id: reqBody._id}, { $set: { count: reqBody.count}});
        res.status(200).send({message: "Updated", reqBody});
    } else
    {
        res.status(422);
        res.json({
            message: "Bad request"
        });
    }
})

function generateNewID(length) {
    const newId = monk.id();
    const newInsert = {
        _id: newId.toString(),
        count: 0
    }
    console.log(newInsert)
    counter.insert(newInsert);
    return newId;
}