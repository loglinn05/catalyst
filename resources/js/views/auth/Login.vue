<template>
    <h3>{{ $t('viewsMessages.loginNoun') }}</h3>
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
                </div>
                <div class="row">
                    <my-input
                        :id="'password'"
                        :type="'password'"
                        :label-text="$t('inputsLabels.password')"
                        @keydown.enter="login"
                        v-model="user.password"
                    />
                </div>
                <div class="row center valign-wrapper justify-content-center">
                    <my-button :class="[inProcess ? 'in-process' : '']" @click="login">{{ $t('viewsMessages.loginVerb') }}</my-button>
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
                <p>{{ $t('viewsMessages.notRegistered') }}
                    <router-link to="/register">{{ $t('viewsMessages.createAccount') }}</router-link>
                </p>
                <router-link to="/forgot-password">{{ $t('viewsMessages.forgotPassword') }}</router-link>
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
