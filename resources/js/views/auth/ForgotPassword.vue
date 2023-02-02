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
                        @keydown.enter="sendResetEmail"
                        v-model="email"
                    />
                </div>
                <div class="row center valign-wrapper justify-content-center">
                    <my-button :class="[inProcess ? 'in-process' : '']" @click="sendResetEmail">Send E-mail</my-button>
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
    name: "forgot-password",
    data: () => ({
        email: ''
    }),
    computed: {
        inProcess() {
            return this.$store.state.helper.inProcess;
        }
    },
    methods: {
        sendResetEmail() {
            this.$store.dispatch('resetPassword/sendResetEmail', this.email)
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
