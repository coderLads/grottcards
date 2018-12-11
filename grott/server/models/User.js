var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    xp: Number,
    trackedDecks: Array
});

module.exports = mongoose.model('User', UserSchema );