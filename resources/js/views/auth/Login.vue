<template>
    <form class="col s6 offset-s3">
        <div class="row">
            <my-input
                :cols="12"
                :id="'email'"
                :type="'email'"
                :label-text="'E-mail'"
                v-model="user.email"
            />
        </div>
        <div class="row">
            <my-input
                :cols="12"
                :id="'password'"
                :type="'password'"
                :label-text="'Password'"
                v-model="user.password"
            />
        </div>
        <div class="row">
            <my-button class="col s4 offset-s4" @click="login">Log In</my-button>
        </div>
        <p class="center-align">Not registered? <router-link to="/register"><a href="#">Create an account.</a></router-link></p>
    </form>
</template>

<script>
export default {
    name: "login",
    data: () => ({
        user: {
            email: '',
            password: ''
        }
    }),
    methods: {
        login() {
            this.$store.dispatch('auth/loginUser', this.user)
        }
    }
}
</script>
