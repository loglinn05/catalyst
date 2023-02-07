import axios from '../../axios/axiosInstance.js'
import toast from '../../modules/toast.js'

const state = {
    userDetails: {}
}

const actions = {
    currentUserDetails(ctx) {
        return new Promise((resolve, reject) => {
            axios.get('/api/user').then(response => {
                ctx.commit('setUserDetails', response.data.userDetails);
            }).catch(error => {
                console.log(error);
                if (error.response.data.errors) {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        error.response.data.errors,
                        { root: true }
                    );
                } else {
                    ctx.dispatch(
                        'setAndDisplayErrors',
                        [ctx.rootState.undefinedErrorMessage],
                        { root: true }
                    );
                }
                reject(error)
            })
        })
    },
    changeUsername(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('api/change-username', {
                    name: payload
                })
                .then((response) => {
                    if (response.data.success) {
                        toast.successToast(response.data.message);
                        ctx.dispatch('currentUserDetails');
                        resolve(response);
                    } else {
                        ctx.dispatch(
                            'setAndDisplayErrors',
                            [ctx.rootState.undefinedErrorMessage],
                            { root: true }
                        );
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (error.response.data.errors) {
                        ctx.dispatch(
                            'setAndDisplayErrors',
                            error.response.data.errors,
                            { root: true }
                        );
                    } else {
                        ctx.dispatch(
                            'setAndDisplayErrors',
                            [ctx.rootState.undefinedErrorMessage],
                            { root: true }
                        );
                    }
                })
        })
    },
    changeEmail(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('api/change-email', {
                    email: payload
                })
                .then((response) => {
                    if (response.data.success) {
                        toast.successToast(response.data.message);
                        ctx.dispatch('currentUserDetails');
                        resolve(response);
                    } else {
                        ctx.dispatch(
                            'setAndDisplayErrors',
                            [ctx.rootState.undefinedErrorMessage],
                            { root: true }
                        );
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (error.response.data.errors) {
                        ctx.dispatch(
                            'setAndDisplayErrors',
                            error.response.data.errors,
                            { root: true }
                        );
                    } else {
                        ctx.dispatch(
                            'setAndDisplayErrors',
                            [ctx.rootState.undefinedErrorMessage],
                            { root: true }
                        );
                    }
                })
        })
    },
    changePassword(ctx, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post('api/change-password', payload)
                .then((response) => {
                    if (response.data.success) {
                        ctx.dispatch('auth/logoutUser', null, { root: true });
                        resolve(response);
                    } else {
                        ctx.dispatch(
                            'setAndDisplayErrors',
                            [ctx.rootState.undefinedErrorMessage],
                            { root: true }
                        );
                        reject(response);
                    }
                })
                .catch((error) => {
                    if (error.response.data.errors) {
                        ctx.dispatch(
                            'setAndDisplayErrors',
                            error.response.data.errors,
                            { root: true }
                        );
                    } else {
                        ctx.dispatch(
                            'setAndDisplayErrors',
                            [ctx.rootState.undefinedErrorMessage],
                            { root: true }
                        );
                    }
                })
        })
    }
}
const mutations = {
    setUserDetails(state, payload) {
        state.userDetails = payload;
    }
}

const getters = {
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
