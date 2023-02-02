<template>
    <div class="row">
        <div class="col s12 m6 offset-m3">
            <div class="card center">
                <div class="card-image">
                    <img src="https://media.istockphoto.com/id/1140180560/photo/colored-powder-explosion-on-black-background.jpg?s=612x612&w=0&k=20&c=gH_tj4MVWr0226qcq_uJ4nxfLTKG-7T29rtUklT4Obk=">
                </div>
                <div class="card-title">{{ currentUser.name }}</div>
                <div class="card-action">
                    <a :href="'mailto:' + currentUser.email">{{ currentUser.email }}</a>
                </div>
                <div class="card-content">
                    <p>Joined {{ currentUser.created_at }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "profile-page",
    data: () => {
        return {}
    },
    computed: {
        currentUser() {
            return this.$store.state.users.userDetails;
        }
    },
    beforeMount() {
        this.$store.dispatch('users/currentUserDetails')
    }
}
</script>

<style scoped>
@import '../../../sass/cards.scss';

.card-action {
    padding: 0.75em 0 0.75em 0;
    border: none;
}
</style>
