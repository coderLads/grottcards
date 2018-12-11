import axios from "axios";

axios.defaults.baseURL = "http://localhost:9090";

export default {
    getUserCards() {
        return axios.get("/getUserCards");
    },
    getUserInfo(id) {
        return axios.get("/getUserInfo?id=" + id);
    }
};