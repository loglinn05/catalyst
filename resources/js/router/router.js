import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import views from '../views'
import middleware from '../middleware'
import middlewarePipeline from './middlewarePipeline.js'

const routes = [
    {
        path: "/login",
        name: "login",
        component: views[0],
        meta: {
            middleware: [middleware.guest]
        }
    },
    {
        path: "/register",
        name: "register",
        component: views[1],
        meta: {
            middleware: [middleware.guest]
        }
    },
    {
        path: "/forgot-password",
        name: "forgot-password",
        component: views[2],
        meta: {
            middleware: [middleware.guest]
        }
    },
    {
        path: "/reset-password/:token",
        name: "reset-password",
        component: views[3],
        meta: {
            middleware: [middleware.guest]
        }
    },
    {
        path: "/",
        name: "dashboard",
        component: views[4],
        meta: {
            middleware: [middleware.auth]
        }
    },
    {
        path: "/profile",
        name: "profile-page",
        component: views[5],
        meta: {
            middleware: [middleware.auth, /* middleware.isSubscribed */]
        }
    },
    {
        path: "/settings",
        name: "settings",
        component: views[6],
        meta: {
            middleware: [middleware.auth, /* middleware.isSubscribed */]
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
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
