export default function ({ next, store }) {
	if (!store.getters.auth.token) {
	    console.log('token: ' + store.getters.auth.token);
	    setTimeout(() => {
            console.log('token: ' + store.getters.auth.token);
        }, 10000)
		return next('login')
	}
	return next()
}
