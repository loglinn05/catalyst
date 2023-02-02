<template>
    <h1>Dashboard</h1>
</template>

<script>
export default {
    name: "dashboard",
    beforeMount() {
        this.$store.dispatch('users/currentUserDetails')
    }
}
</script>

<style scoped>

</style>
