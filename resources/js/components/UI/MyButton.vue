<template>
    <a :class="'waves-effect waves-'+ wavesColor + ' btn' +
    [flat ? '-flat' : ''] + [!flat ? (' ' + color) : '']">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'my-button',
    props: {
        color: {
            type: String,
            default: "pink darken-3"
        },
        wavesColor: {
            type: String,
            default: "light"
        },
        flat: {
            type: Boolean,
            default: false
        }
    }
}
</script>
