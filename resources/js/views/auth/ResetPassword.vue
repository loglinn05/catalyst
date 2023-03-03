<template>
    <h3>{{ $t('viewsMessages.passwordReset') }}</h3>
    <div class="col s6 offset-s3">
        <div class="row">
            <form class="col s12" @submit.prevent>
                <div class="row">
                    <my-input
                        :id="'email'"
                        :type="'email'"
                        :label-text="$t('inputsLabels.email')"
                        v-model="user.email"
                    />
                    <my-input
                        :id="'password'"
                        :type="'password'"
                        :label-text="$t('inputsLabels.password')"
                        v-model="user.password"
                    />
                    <my-input
                        :id="'password_confirmation'"
                        :type="'password'"
                        :label-text="$t('inputsLabels.passwordConfirmation')"
                        @keydown.enter="resetPassword"
                        v-model="user.password_confirmation"
                    />
                </div>
                <div class="row center valign-wrapper justify-content-center">
                    <my-button :class="[inProcess ? 'in-process' : '']" @click="resetPassword">{{ $t('viewsMessages.resetPassword') }}</my-button>
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
                <p>{{ $t('viewsMessages.goBackToLoginPage') }}
                    <router-link to="/login">{{ $t('viewsMessages.loginVerb') }}.</router-link>
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
