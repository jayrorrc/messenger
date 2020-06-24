import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        auth: {},
        users: [],
        messages: []
    },
    getters: {
        getAuth: (state) => {
            return state.auth;
        },
        isAuthorized: (state) => {
            return !!Object.keys(state.auth).length;
        },
        getCurrentUserID: (state) => {
            return state.auth.user._id
        },
        getCurrentUserName: (state) => {
            return state.auth.user.username
        },
        getToken: (state) => {
            return state.auth.token
        },
        getUsers: (state) => {
            return state.users;
        },
        getActiveUserID: (state) => {
            let user = state.users.filter((user) => {
                return user.active;
            }).pop();

            return user ? user._id : null;
        },
        getMessages: (state) => {
            return state.messages;
        }
    },
    mutations: {
        setAuth(state, auth) {
            state.auth = auth;
        },
        setUsers(state, users) {
            state.users = users;
        },
        activeUser(state, userID) {
            state.users = state.users.map((user) => {
                if (user._id == userID) {
                    user.active = true;
                } else {
                    user.active = false;
                }

                return user;
            });
        },
        setMessages(state, messages) {
            state.messages = messages;
        }
    }
});