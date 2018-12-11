var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', {
    useNewUrlParser: true
});

var cardSchema = new mongoose.Schema({
    front: String,
    back: Number,
    id: String
});