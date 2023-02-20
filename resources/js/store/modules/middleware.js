const state = {
	user: {
		loggedIn: false,
		isSubscribed: false,
		token: localStorage.getItem('token') || '',
        locale: 'en'
	}
}
const actions = {
    getLocale(ctx) {
        return axios.get(
            'https://api.ipdata.co/?api-key=5bdb37174c8f78a83e68e7fe4932de00d3add080cf575ae1dd1afcbf',
            {
                headers: {
                    'X-Requested-With': null
                }
            }
        ).then((response) => {
            if (response.data && response.data.languages) {
                let cis_language_codes = [
                    'uk', 'kk', 'uz', 'be', 'az', 'ky', 'tg', 'ka', 'hy', 'lv',
                    'mo', 'lt', 'et', 'tk', 'ab', 'os'
                ];
                let language_codes = [];

                response.data.languages.forEach((l, i) => {
                    language_codes[i] = l.code;
                })

                for (const lc of language_codes) {
                    if (lc == 'en' || lc == 'ru') {
                        ctx.commit('setLocale', lc);
                        return;
                    }
                }

                if (_.intersection(cis_language_codes, language_codes).length > 0) {
                    ctx.commit('setLocale', 'ru');
                } else {
                    ctx.commit('setLocale', 'en');
                }
            } else {
                ctx.commit('setLocale', 'en');
            }
        })
    }
}
const mutations = {
    setLoggedIn(state, payload) {
        state.user.loggedIn = payload;
    },
    setIsSubscribed(state, payload) {
        state.user.isSubscribed = payload;
    },
    setToken(state, payload) {
        state.user.token = payload;
    },
    setLocale(state, payload) {
        state.user.locale = payload;
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
