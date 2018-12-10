var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/card_app");

var cardSchema = new mongoose.Schema({
    front: String,
    back: String,
    id: Number
});

var Card = new mongoose.model("Card", cardSchema);


// var testCard = new Card({
//     front: "grotted",
//     back: "ya yeet",
//     id: 001
// });

// testCard.save(function(err, card) {
//     if(err) {
//         console.log("ERROR");
//     }
//     else {
//         console.log("Added " + card + " to the database");
//     }
// });

// Card.create({
//     front: "test",
//     back: "test2",
//     id: 002
// }, function(err, card) {
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(card);
//     }
// });

Card.find({}, function(err, cards) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(cards);
    }
});