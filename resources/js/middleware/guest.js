export default function ({ next, store }) {
	if (store.getters.auth.token) {
		return next('/')
	}
	return next()
}
