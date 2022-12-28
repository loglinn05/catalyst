import Vuex from 'vuex';

import auth from './modules/auth.js'
import middleware from './modules/middleware.js';

export default new Vuex.Store({
	modules: {
		middleware,
        auth
	}
})
