const tmi = require('tmi.js');
const util = require('util');
const mongoose = require('mongoose');
const chatSchema = require('./db_schema');
const express = require('express');
const helmet = require("helmet");
const cors = require('cors');
const CHANNEL_NAME = 'japczan';

mongoose.connect('mongodb://localhost:27017/twitch-chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => console.log(error));

//chatSchema.createCollection();

// newChatMsg.save( (err, newChatMsg) => {
//     if(err)
//         return console.error(err._message);
//     console.log(`${newChatMsg.nick} -> ${newChatMsg.message}`)
// });


const client = new tmi.Client({
	channels: [ CHANNEL_NAME ],
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    //console.log(util.inspect(tags, { showHidden: false, depth: null } ));
	//console.log(`${tags['display-name']} -> ${message}`);
    const newChatMsg = new chatSchema ({
        nick: tags['display-name'],
        message: message,
        date: Date.now()
    });
    newChatMsg.save( (err, newChatMsg) => {
            if(err)
                return console.error(err._message);
            console.log(`${newChatMsg.nick} -> ${newChatMsg.message}`)
        });

});

const app = express();
app.use(helmet());
app.use(cors());

app.listen(5000, () => {
    console.log("Connected");
})

app.get('/', async (req, res) => {
    await chatSchema
        .find({})
        .sort({date: -1})
        .select({
            "__v": 0
        })
        .then(msg => {
            res.json(msg);
        })
});

app.get('/logs', async (req, res) => {
    await chatSchema
        .find({})
        .sort({date: -1})
        .limit(50)
        .select({
            "__v": 0
        })
        .then(msg => {
            res.json(msg);
        })
});

async function clearDB()
{
    await chatSchema.deleteMany({});
};
