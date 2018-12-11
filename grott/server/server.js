// import modules
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();

// import models
const Deck = require('./models/Deck');
const User = require('./models/User');

// setup db connection
const mongoDB = 'mongodb://localhost:27017/card_app';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// setup express connection
app.use(express.static('public'));
app.use(cors());
const port = 9090;

// path for requesting decks of cards
app.get("/getUserCards", (req, res) => {
    Deck.find({}, function (err, decks) {
        if (err) {
            console.log(err);
        } else {
            res.send(decks);
        }
    });
});

app.get("/getUserInfo", (req, res) => {
    User.find({
        id: req.query.id
    }, function (err, userInfo) {
        if (err) {
            console.log(err);
        } else {
            res.send(userInfo);
        }
    });
});

app.listen(port, () => console.log(`Listening on ${port}`));


// let testUser = new User({
//     id: 0,
//     name: "ms grott",
//     image: "https://i.imgur.com/WnmUCm7.png",
//     xp: 320,
//     trackedDecks: [0,3,4]
// }, function(err, out) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(out);
//     }
// });

// testUser.save(function(err, user) {
//     if(err) {
//         console.log("ERROR");
//     }
//     else {
//         console.log("Added " + user + " to the database");
//     }
// });


// let testCard = new Card({
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
// let ins = [{
//     deckId: 0,
//     mastery: 10,
//     deckName: "Weeb Shit",
//     cardCount: 5
// },
// {
//     deckId: 1,
//     mastery: 10,
//     deckName: "Russian",
//     cardCount: 30
// },
// {
//     deckId: 2,
//     mastery: 10,
//     deckName: "Black",
//     cardCount: 69
// },
// {
//     deckId: 3,
//     mastery: 10,
//     deckName: "German",
//     cardCount: 20
// },
// {
//     deckId: 4,
//     mastery: 10,
//     deckName: "Chinese",
//     cardCount: 100
// },
// {
//     deckId: 5,
//     mastery: 10,
//     deckName: "Martian",
//     cardCount: 20
// }
// ];
// ins.forEach(input => {
//     Deck.create({
//         deckId: input.deckId,
//         mastery:input.mastery,
//         deckName: input.deckName,
//         cardCount: input.cardCount 
//     }, function(err, deck) {
//         if(err){
//             console.log(err);
//         }
//         else {
//             console.log(deck);
//         }
//     });
// });