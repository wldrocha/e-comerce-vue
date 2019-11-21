
import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Api from '../api.export'


Vue.use(VueAxios, Axios);

export default {
    state: {
        token: {
            access_token: null,
            expires_in: null,
            token_type: null
        },
        user: {
            _id: null,
            firstName: null,
            lastName: null,
            email: null,
            level: null
        }
    },
    mutations: {

        SET_TOKEN(state, token) {
            state.token = token
        },
        AUTH_SUCCESS(state, user) {
            state.user = user;
        },
        AUTH_ERROR(state, err) {
            state.status = err;
        },
        LOGOUT(state) {

            state.user._id = null
            state.user.firstName = null
            state.user.lastName = null
            state.user.email = null
            state.user.level = null

            state.token.access_token = null
            state.token.expires_in = null
            state.token.token_type = null
            state.notifications = []

        },


    },
    actions: {
        ResetPass(user) {
            return new Promise((resolve, reject) => {
                Vue.axios({ url: Api.baseUrl + Api.resetPassRequest, data: user, method: Api.resetPassMethod })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(err => {
                        reject(err.response);
                    })
            });
        },
        NwePass(user) {
            return new Promise((resolve, reject) => {
                Vue.axios({ url: Api.baseUrl + Api.resetPassRequest + user.token, data: { password: user.password }, method: Api.newPassMethod })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(err => {
                        reject(err.response);
                    })
            });
        },
        Register({ getters, commit }, data) {
            return new Promise((resolve, reject) => {
                Vue.axios({ url: Api.baseUrl + Api.registerRequest, data: data, method: Api.registerMethod })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(err => {
                        reject(err.response);
                    })
            });
        },
        Login({ commit }, user) {
            return new Promise((resolve, reject) => {
                Vue.axios({ url: Api.baseUrl + Api.loginRequest, data: user, method: Api.registerMethod })
                    .then(success => {
                        localStorage.setItem('user-token', success.data.token)
                        commit('SET_TOKEN', success.data.token)
                        resolve(success);
                    }).catch((err) => {
                        reject(err);
                    })
            });
        },
        setUser({ getters, commit }) {
            return new Promise((resolve, reject) => {
                Vue.axios({ url: Api.baseUrl + Api.getUserRequest, method: Api.getUserMethod, headers: getters.getHeader })
                    .then(success => {
                        commit('AUTH_SUCCESS', success.data.user)
                        resolve(success)
                    }).catch((err) => {
                        reject(err)
                    })
            });
        },
        UpdateUser({ getters, dispatch }, updateData) {
            return new Promise((resolve, reject) => {
                Vue.axios({ url: Api.baseUrl + Api.getUserRequest, data: updateData, method: Api.updateUserMethod, headers: getters.getHeader })
                    .then(response => {
                        dispatch('setUser')
                        resolve(response)

                    }).catch(err => {
                        console.log(err)
                        reject(err)

                    })
            })
        },
        Logout({ commit }) {
            return new Promise((resolve) => {
                commit('LOGOUT');
                let path_ = '/'
                resolve(path_);
            })
        }
    },
    getters: {
        checkToken(state) {
            let dateNow = Date.now();
            if (dateNow > state.token.expires_in) {
                return state.token
            } else {
                return null
            }
        },
        getHeader(state, getters) {
            if (getters.isAuthToken) {
                if (getters.isAuthToken.access_token) {
                    let headers = {
                        'accept': 'Application/json',
                        'authentication': getters.isAuthToken.token_type + getters.isAuthToken.access_token,
                    }
                    return headers;
                } else {
                    return null
                }
            } else {
                return null
            }
        },
        isAuthUser(state) {
            if (state.user._id) {
                return state.user
            } else {
                return null
            }
        },
        isAuthToken(state) {

            if (!state.token.access_token) {
                return null
            } else {
                return state.token
            }
        }

    }
}