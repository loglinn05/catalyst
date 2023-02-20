<template>
    <h3>{{ $t('viewsMessages.registerNoun') }}</h3>
    <div class="col s6 offset-s3">
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <my-input
                        :id="'username'"
                        :label-text="$t('inputsLabels.username')"
                        v-model="user.name"
                    />
                </div>
                <div class="row">
                    <my-input
                        :id="'email'"
                        :type="'email'"
                        :label-text="$t('inputsLabels.email')"
                        v-model="user.email"
                    />
                </div>
                <div class="row">
                    <my-input
                        :id="'password'"
                        :type="'password'"
                        :label-text="$t('inputsLabels.password')"
                        v-model="user.password"
                    />
                </div>
                <div class="row">
                    <my-input
                        :id="'password-confirmation'"
                        :type="'password'"
                        :label-text="$t('inputsLabels.passwordConfirmation')"
                        @keydown.enter="register"
                        v-model="user.password_confirmation"
                    />
                </div>
                <div class="row center valign-wrapper justify-content-center">
                    <my-button :class="[inProcess ? 'in-process' : '']" @click="register">{{ $t('viewsMessages.registerVerb') }}</my-button>
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
                <p>{{ $t('viewsMessages.haveAccount') }}
                    <router-link to="/login">{{ $t('viewsMessages.loginVerb') }}.</router-link>
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
