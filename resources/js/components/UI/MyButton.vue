<template>
    <a :class="'waves-effect waves-light btn ' + color"><slot></slot></a>
</template>

<script>
export default {
    name: 'my-button',
    props: {
        color: {
            type: String,
            default: "pink darken-3"
        }
    }
}
</script>
