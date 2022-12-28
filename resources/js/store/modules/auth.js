import axios from 'axios'
import router from '../../router/router.js'

const state = {
    userDetails: {},
    loggedIn: false
}
const actions = {
    registerUser({}, user) {
        return new Promise((resolve, reject) => {
            axios.post(
                '/api/register', {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.passwordConfirmation
                }
            ).then((response) => {
                if (response.data) {
                    resolve(response)
                    router.push('/login')
                } else {
                    reject(response)
                }
            }).catch((error) => {
                console.log('error');
                reject(error)
            })
        })
    },
    loginUser(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios.post('api/login', payload).then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('token', response.data.access_token);
                    ctx.commit('setLoggedIn', true);
                    resolve(response);
                    router.push('/')
                } else {
                    reject(response)
                }
            }).catch(error => {
                reject(error);
            })
        })
    },
    logoutUser({ commit }) {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            commit('setLoggedIn', false);
            resolve(true)
            router.push('/login');
        })
    },
    setUserAuthStatus({ commit }) {
        return new Promise((resolve) => {
            if (localStorage.getItem('token')) {
                commit('setLoggedIn', true)
                resolve(true)
            } else {
                commit('setLoggedIn', false)
                resolve(false)
            }
        })
    }
}
const mutations = {
    setLoggedIn(state, payload) {
        state.loggedIn = payload;
    }
}

const getters = {
    loggedIn(state) {
        return state.loggedIn
    },
    userDetails(state) {
        return state.userDetails
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
