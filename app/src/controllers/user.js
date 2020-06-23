import axios from "axios"

export default {
    async getUsers(token, currentUserID) {
        let res = await axios.get("http://localhost:8081/api/user?id=" + currentUserID, {
            headers: {
                'x-access-token': token
            }
        });
        return res.data;
    }
}