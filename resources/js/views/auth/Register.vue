<template>
    <form class="col s6 offset-s3">
        <div class="row">
            <my-input
                :cols="12"
                :id="'username'"
                :type="'text'"
                :label-text="'Username'"
                v-model="user.username"
            />
        </div>
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
            <my-input
                :cols="12"
                :id="'password-confirmation'"
                :type="'password'"
                :label-text="'Password Confirmation'"
                v-model="user.passwordConfirmation"
            />
        </div>
        <div class="row">
            <my-button class="col s4 offset-s4" @click.prevent="register">Register</my-button>
        </div>
        <p class="center-align">Already have an account? <router-link to="/login"><a href="#">Log In.</a></router-link></p>
    </form>
</template>

<script>
export default {
    name: "register",
    data: () => ({
        user: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }),
    methods: {
        register() {
            this.$store.dispatch('auth/registerUser', this.user)
        }
    }
}
</script>
