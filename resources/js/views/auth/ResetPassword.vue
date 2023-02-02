<template>
    <div class="col s6 offset-s3">
        <div class="row">
            <h3>Enter your e-mail</h3>
            <form class="col s12">
                <div class="row">
                    <my-input
                        :id="'email'"
                        :type="'email'"
                        :label-text="'E-mail'"
                        v-model="user.email"
                    />
                    <my-input
                        :id="'password'"
                        :type="'password'"
                        :label-text="'Password'"
                        v-model="user.password"
                    />
                    <my-input
                        :id="'password_confirmation'"
                        :type="'password'"
                        :label-text="'Password Confirmation'"
                        @keydown.enter="resetPassword"
                        v-model="user.password_confirmation"
                    />
                </div>
                <div class="row center valign-wrapper justify-content-center">
                    <my-button :class="[inProcess ? 'in-process' : '']" @click="resetPassword">Reset Password</my-button>
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
                <p>Go back to login page.
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
    name: "reset-password",
    data: () => ({
        user: {
            email: '',
            password: '',
            password_confirmation: '',
            token: ''
        }
    }),
    computed: {
        inProcess() {
            return this.$store.state.helper.inProcess;
        }
    },
    methods: {
        resetPassword() {
            this.user.token = this.$route.params.token;
            this.$store.dispatch('resetPassword/resetPassword', this.user)
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
