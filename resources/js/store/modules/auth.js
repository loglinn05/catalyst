import axios from '../../axios/axiosInstance.js'
import router from '../../router/router.js'
import traverseObject from "../../modules/traverseObject.js";

const state = {}

const actions = {
    registerUser(ctx, user) {
        return new Promise((resolve, reject) => {
            ctx.commit('setInProcess', true, { root: true });
            axios.post(
                '/api/register', user
            ).then((response) => {
                console.log(response);
                if (response.data) {
                    resolve(response)
                    router.push('/login')
                } else {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        [ctx.rootState.helper.undefinedErrorMessage],
                        { root: true }
                    );
                    reject(response)
                }
            }).catch((error) => {
                if (error.response.data.errors) {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        error.response.data.errors,
                        { root: true }
                    );
                } else {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        [ctx.rootState.helper.undefinedErrorMessage],
                        { root: true }
                    );
                }
                reject(error)
            }).finally(() => {
                ctx.commit('setInProcess', false, { root: true });
            })
        })
    },
    loginUser(ctx, payload) {
        return new Promise((resolve, reject) => {
            ctx.commit('setInProcess', true, { root: true });
            axios.post('api/login', payload).then(response => {
                if (response.data.access_token) {
                    ctx.commit('setLoggedIn', true, { root: true })
                    localStorage.setItem('token', response.data.access_token);
                    ctx.commit('setToken', response.data.access_token, { root: true })
                    resolve(response);
                    router.push('/');
                } else {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        [ctx.rootState.helper.undefinedErrorMessage],
                        { root: true }
                    );
                    reject(response)
                }
            }).catch(error => {
                console.log(traverseObject(error, 'errors')[0])
                if (error.response.data.errors) {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        error.response.data.errors,
                        { root: true }
                    );
                } else {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        [ctx.rootState.helper.undefinedErrorMessage],
                        { root: true }
                    );
                }
                reject(error);
            }).finally(() => {
                ctx.commit('setInProcess', false, { root: true });
            })
        })
    },
    logoutUser({ commit }) {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            commit('setLoggedIn', false, { root: true })
            commit('setToken', '', { root: true })
            resolve(true)
            router.push('/login');
        })
    },
    setUserAuthStatus(ctx) {
        return new Promise((resolve) => {
            if (ctx.rootGetters.auth.token) {
                ctx.commit('setLoggedIn', true, { root: true })
                resolve(true)
            } else {
                ctx.commit('setLoggedIn', false, { root: true })
                resolve(false)
            }
        })
    }
}
const mutations = {}

const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
