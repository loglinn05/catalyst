const state = {
	user: {
		loggedIn: false,
		isSubscribed: false,
		token: localStorage.getItem('token') || ''
	},
}
const actions = {}
const mutations = {
    setLoggedIn(state, payload) {
        state.user.loggedIn = payload;
    },
    setIsSubscribed(state, payload) {
        state.user.isSubscribed = payload;
    },
    setToken(state, payload) {
        state.user.token = payload;
    }
}
const getters = {
	auth(state) {
		return state.user
	}
}

export default {
	namespaced: false,
	state,
	actions,
	mutations,
	getters
}
