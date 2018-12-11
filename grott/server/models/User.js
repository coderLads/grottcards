const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    xp: Number,
    trackedDecks: Array
});

module.exports = mongoose.model('User', UserSchema);