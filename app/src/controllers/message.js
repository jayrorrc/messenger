import axios from "axios"

export default {
    async sendMessage(token, data) {
        let res = await axios.post("http://localhost:8081/api/message/send", data, {
            headers: {
                'x-access-token': token
            }
        });
        return res.data;
    }
}