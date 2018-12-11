var mongoose = require('mongoose');

var DeckSchema = new mongoose.Schema({
    deckId: Number,
    mastery: Number,
    deckName: String,
    cardCount: Number,
    cards: Array
});

module.exports = mongoose.model('Deck', DeckSchema );