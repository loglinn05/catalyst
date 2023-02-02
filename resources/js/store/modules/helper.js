import toast from '../../modules/toast.js'
import flattenObject from '../../modules/flattenObject.js'

const state = {
    undefinedErrorMessage: "An error occurred. It might be server-side.",
    inProcess: false,
    errors: [],
    modalInstances: []
}

const actions = {
    setAndDisplayErrors(ctx, errors) {
        ctx.commit(
            'setErrors',
            flattenObject.flattenObjectWithoutKeys(errors)
        );
        state.errors.forEach((error) => {
            toast.dangerToast(error);
        })
    }
}
const mutations = {
    setInProcess(state, payload) {
        state.inProcess = payload;
    },
    setErrors(state, payload) {
        state.errors = payload;
    }
}

const getters = {}

export default {
    namespaced: false,
    state,
    actions,
    mutations,
    getters,
}
