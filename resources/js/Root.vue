<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper pink darken-3">
                <router-link to="/"><img src="../images/logo.png"/></router-link>
                <ul class="right hide-on-med-and-down">
                    <li><router-link to="/register">
                        Register
                    </router-link></li>
                    <li><router-link to="/login">
                        Log In
                    </router-link></li>
                    <li><router-link to="/profile-page">
                        <i class="material-icons">account_circle</i>
                    </router-link></li>
                    <li>
                        <my-button
                            :color="'pink darken-2'"
                            @click="logout"
                            v-if="loggedIn">Log Out</my-button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="container">
        <div class="row">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "root",
    computed: {
        ...mapGetters({
            loggedIn: 'auth/loggedIn',
        })
    },
    methods: {
        ...mapActions({
            logout: 'auth/logoutUser'
        })
    },
    created() {
        this.$store.dispatch('auth/setUserAuthStatus')
    }
}
</script>

<style scoped>
.container {
    padding: 2em;
}
.nav-wrapper img {
    vertical-align: middle;
    padding-left: 30px;
    height: 55px;
}
</style>
