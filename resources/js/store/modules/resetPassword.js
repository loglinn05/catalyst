import axios from '../../axios/axiosInstance.js'
import router from '../../router/router.js'
import toast from '../../modules/toast.js'

const state = {}

const actions = {
    sendResetEmail(ctx, email) {
        return new Promise((resolve, reject) => {
            ctx.commit('setInProcess', true, { root: true });
            axios.post('api/forgot-password', {
                email: email
            }).then(response => {
                if (response.data) {
                    router.push('/login')
                    resolve(response)
                } else {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        [ctx.rootState.undefinedErrorMessage],
                        { root: true }
                    );
                    reject(response)
                }
            }).catch((error) => {
                if (error.response.data.errors) {
                    ctx.dispatch('setAndDisplayErrors', error.response.data.errors, { root: true });
                } else {
                    ctx.dispatch('setAndDisplayErrors', [ctx.rootState.undefinedErrorMessage], { root: true });
                }
                reject(error)
            }).finally(() => {
                ctx.commit('setInProcess', false, { root: true });
            })
        })
    },
    resetPassword(ctx, user) {
        return new Promise((resolve, reject) => {
            ctx.commit('setInProcess', true, { root: true });
            axios.post('/api/reset-password', user).then(response => {
                if (response.data) {
                    router.push('/login')
                    resolve(response)
                } else {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        [ctx.rootState.undefinedErrorMessage],
                        { root: true }
                    );
                    reject(response)
                }
            }).catch((error) => {
                if (error.response.data.errors) {
                    ctx.dispatch('setAndDisplayErrors', error.response.data.errors, { root: true });
                } else {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        [ctx.rootState.undefinedErrorMessage],
                        { root: true }
                    );
                }
                reject(error)
            }).finally(() => {
                ctx.commit('setInProcess', false, { root: true });
            })
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
