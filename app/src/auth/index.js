import axios from "axios"

export default {
    async login(username, password) {
        return axios.post('http://localhost:8081/api/user/login', {
            username,
            password
        });
    },
    async signup(username, password) {
        return axios.post('http://localhost:8081/api/user/signup', {
            username,
            password
        });
    }
}