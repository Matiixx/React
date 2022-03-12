//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const defaultDate = { type: Date, default: Date.now() };

const chatSchema = new Schema({
    nick: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: defaultDate
});

const twitchChatDB = mongoose.model('twitch-chat', chatSchema);
module.exports = twitchChatDB;