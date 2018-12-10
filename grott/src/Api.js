import axios from "axios";

axios.defaults.baseURL = "/";

export default {
    getUserCards() {
        // return axios.get("/posts");
        return [{
                deckId: 0,
                mastery: 10,
                deckName: "Weeb Shit",
                cardCount: 5
            },
            {
                deckId: 1,
                mastery: 10,
                deckName: "Russian",
                cardCount: 30
            },
            {
                deckId: 2,
                mastery: 10,
                deckName: "Black",
                cardCount: 69
            },
            {
                deckId: 3,
                mastery: 10,
                deckName: "German",
                cardCount: 20
            },
            {
                deckId: 4,
                mastery: 10,
                deckName: "Chinese",
                cardCount: 100
            },
            {
                deckId: 5,
                mastery: 10,
                deckName: "Martian",
                cardCount: 20
            }
        ]


    },

    getUserImage(id) {
        // return axios.get("/userImage/" + id);
        return ["https://i.imgur.com/WnmUCm7.png", "https://i.imgur.com/WnmUCm7.png"][id];
    }
};