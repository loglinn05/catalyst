<template>
    <div class="row">
        <h3>Settings</h3>
        <div class="col s12 m6 offset-m3">
            <div class="card center">
                <div class="card-image">
                    <img src="https://media.istockphoto.com/id/1140180560/photo/colored-powder-explosion-on-black-background.jpg?s=612x612&w=0&k=20&c=gH_tj4MVWr0226qcq_uJ4nxfLTKG-7T29rtUklT4Obk=">
                </div>
                <div class="card-title">
                    <a href="#change-username-modal" class="detail-to-edit modal-trigger">{{ currentUser.name }}
                        <i class="material-icons right" style="line-height: inherit;">create</i>
                    </a>
                </div>
                <div class="card-action">
                    <a href="#change-email-modal" class="detail-to-edit modal-trigger">{{ currentUser.email }}
                        <i class="material-icons right">create</i>
                    </a>
                </div>
                <div class="card-content">
                    <my-button href="#change-password-modal" class="modal-trigger">Change Password</my-button>
                </div>
            </div>
        </div>

        <!-- Username change modal -->
        <my-modal
            :id="'change-username'"
            :modalFooterButtonText="'Change'"
            @modalFooterButtonClicked="changeUsername"
        >
            <h4>Change your username</h4>
            <my-input
                :id="'username'"
                :label-text="'New Username'"
                @keydown.enter="changeUsername"
                v-model="username"
            />
        </my-modal>

        <!-- E-mail change modal -->
        <my-modal
            :id="'change-email'"
            :modalFooterButtonText="'Change'"
            @modalFooterButtonClicked="changeEmail"
        >
            <h4>Change your e-mail</h4>
            <my-input
                :id="'email'"
                :type="'email'"
                :label-text="'New E-mail'"
                @keydown.enter="changeEmail"
                v-model="email"
            />
        </my-modal>

        <!-- Password change modal -->
        <my-modal
            :id="'change-password'"
            :modalFooterButtonText="'Change'"
            @modalFooterButtonClicked="changePassword"
        >
            <h4>Change your password</h4>
            <my-input
                :id="'old-password'"
                :type="'password'"
                :label-text="'Old Password'"
                v-model="passwords.old_password"
            />
            <my-input
                :id="'new-password'"
                :type="'password'"
                :label-text="'New Password'"
                v-model="passwords.new_password"
            />
            <my-input
                :id="'new-password-confirmation'"
                :type="'password'"
                :label-text="'New Password Confirmation'"
                @keydown.enter="changePassword"
                v-model="passwords.new_password_confirmation"
            />
        </my-modal>
    </div>
</template>

<script>
export default {
    name: "profile-page",
    data: () => ({
        username: '',
        email: '',
        passwords: {
            old_password: '',
            new_password: '',
            new_password_confirmation: ''
        },
    }),
    computed: {
        currentUser() {
            return this.$store.state.users.userDetails;
        }
    },
    methods: {
        changeUsername() {
            this.$store.state.helper.modalInstances['change-username'].close();
            this.$store.dispatch('users/changeUsername', this.username);
        },
        changeEmail() {
            this.$store.state.helper.modalInstances['change-email'].close();
            this.$store.dispatch('users/changeEmail', this.email);
        },
        changePassword() {
            this.$store.state.helper.modalInstances['change-password'].close();
            this.$store.dispatch('users/changePassword', this.passwords);
        }
    },
    beforeMount() {
        this.$store.dispatch('users/currentUserDetails')
    },
    mounted() {
        console.log(this.$store.state.helper.modalInstances);
    }
}
</script>

<style scoped>
@import '../../../sass/cards.scss';

i.material-icons.right {
    margin-left: 0;
}
a.detail-to-edit {
    text-decoration: solid black !important;
}

.detail-to-edit:hover,  .detail-to-edit:active {
    text-decoration: dotted rgba(160, 160, 160, 0.4) !important;
}
.card-action {
    margin: 0.375em 0 0.375em 0;
    padding: 0.375em 0 0.375em 0;
    border-bottom: 1px solid rgba(160, 160, 160, 0.2);
}
</style>
