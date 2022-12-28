import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'
import Dashboard from '../views/pages/Dashboard.vue';
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import ProfilePage from '../views/pages/ProfilePage.vue';
import middleware from '../middleware'
import middlewarePipeline from './middlewarePipeline.js'

const routes = [
    {
        path: "/",
        name: 'dashboard',
        component: Dashboard,
        meta: {
            middleware: [middleware.auth]
        }
    },
    {
        path: "/profile-page",
        name: 'profile-page',
        component: ProfilePage,
        meta: {
            middleware: [middleware.auth, middleware.isSubscribed]
        }
    },
    {
        path: "/login",
        name: 'login',
        component: Login,
        meta: {
            middleware: [middleware.guest]
        }
    },
    {
        path: "/register",
        name: 'register',
        component: Register,
        meta: {
            middleware: [middleware.guest]
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }

    return middleware[0] ({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

export default router
