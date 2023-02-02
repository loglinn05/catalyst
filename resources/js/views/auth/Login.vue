<template>
    <div class="col s6 offset-s3">
        <div class="row">
            <h3>Log In</h3>
            <form class="col s12">
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
                        @keydown.enter="login"
                        v-model="user.password"
                    />
                </div>
                <div class="row center valign-wrapper justify-content-center">
                    <my-button :class="[inProcess ? 'in-process' : '']" @click="login">Log In</my-button>
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
                <p>Not registered?
                    <router-link to="/register">
                        <a href="#">Create an account.</a>
                    </router-link>
                </p>
                <router-link to="/forgot-password"><a href="#">Forgot password?</a></router-link>
            </form>
        </div>
    </div>
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
    computed: {
        inProcess() {
            return this.$store.state.helper.inProcess;
        }
    },
    methods: {
        login() {
            this.$store.dispatch('auth/loginUser', this.user);
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
