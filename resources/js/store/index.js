import Vuex from 'vuex';

import helper from './modules/helper.js'
import auth from './modules/auth.js'
import middleware from './modules/middleware.js'
import resetPassword from './modules/resetPassword.js'
import users from './modules/users.js'

export default new Vuex.Store({
	modules: {
	    helper,
        auth,
		middleware,
        resetPassword,
        users
	}
})
