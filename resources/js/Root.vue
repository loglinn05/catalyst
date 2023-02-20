<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper pink darken-3">
                <router-link to="/"><img src="../images/logo.png"/></router-link>
                <ul class="right hide-on-med-and-down">
                    <template v-if="!loggedIn">
                        <li>
                            <router-link to="/register">
                                {{ $t('viewsMessages.registerNoun') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/login">
                                {{ $t('viewsMessages.loginNoun') }}
                            </router-link>
                        </li>
                    </template>
                    <template v-if="loggedIn">
                        <li :title="$t('viewsMessages.profilePage')">
                            <router-link to="/profile">
                                <i class="material-icons">account_circle</i>
                            </router-link>
                        </li>
                        <li :title="$t('viewsMessages.userSettings')">
                            <router-link to="/settings">
                                <i class="material-icons">settings</i>
                            </router-link>
                        </li>
                        <li>
                            <my-button
                                :color="'pink darken-2'"
                                @click="logout">{{ $t('viewsMessages.logoutVerb') }}</my-button>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </div>
    <div class="container">
        <div class="row">
            <div class="col s12 center">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "root",
    computed: {
        ...mapGetters({
            userAuthInfo: 'auth',
        }),
        loggedIn() {
            return this.userAuthInfo.loggedIn;
        }
    },
    methods: {
        ...mapActions({
            logout: 'auth/logoutUser'
        })
    },
    beforeCreate() {
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
