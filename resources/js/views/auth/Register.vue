<template>
    <div class="col s6 offset-s3">
        <div class="row">
            <h3>Register</h3>
            <form class="col s12">
                <div class="row">
                    <my-input
                        :id="'username'"
                        :label-text="'Username'"
                        v-model="user.name"
                    />
                </div>
                <div class="row">
                    <my-input
                        :id="'email'"
                        :type="'email'"
                        :label-text="'E-mail'"
                        v-model="user.email"
                    />
                </div>
                <div class="row">
                    <my-input
                        :id="'password'"
                        :type="'password'"
                        :label-text="'Password'"
                        v-model="user.password"
                    />
                </div>
                <div class="row">
                    <my-input
                        :id="'password-confirmation'"
                        :type="'password'"
                        :label-text="'Password Confirmation'"
                        @keydown.enter="register"
                        v-model="user.password_confirmation"
                    />
                </div>
                <div class="row center valign-wrapper justify-content-center">
                    <my-button :class="[inProcess ? 'in-process' : '']" @click="register">Register</my-button>
                    <div v-if="inProcess" class="preloader-wrapper small active">
                        <div class="spinner-layer spinner-red-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Already have an account?
                    <router-link to="/login">
                        <a href="#">Log In.</a>
                    </router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "register",
    data: () => ({
        user: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    }),
    computed: {
        inProcess() {
            return this.$store.state.helper.inProcess;
        }
    },
    methods: {
        register() {
            this.$store.dispatch('auth/registerUser', this.user)
        }
    }
}
</script>

<style scoped>
.preloader-wrapper.small {
    width: 20px;
    height: 20px;
}
</style>
