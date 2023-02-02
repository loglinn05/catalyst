<template>
    <div :class="'input-field col s' + cols">
        <input :id="id"
               :type="type"
               :value="modelValue"
               @input="updateInput"
               class="validate">
        <label :for="id">{{ labelText }}</label>
        <span class="helper-text" data-error="Invalid input" data-success="Valid input"></span>
    </div>
</template>

<script>
export default {
    name: "my-input",
    props: {
        cols: {
            type: Number,
            default: 12
        },
        id: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        labelText: {
            type: String,
            required: true
        },
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.modal .modal-content .input-field:last-child {
    margin-bottom: 0;
}
/* input text color */
.input-field input {
    color: var(--pink-4);
}
/* label color */
.input-field label {
    color: var(--pink-4);
}
/* label focus color */
.input-field input:focus + label {
    color: var(--pink-4) !important;
}
/* label underline focus color */
.input-field input:focus {
    border-bottom: 1px solid var(--pink-4) !important;
    box-shadow: 0 1px 0 0 var(--pink-4) !important;
}
/* valid/invalid color */
.input-field input.valid, .input-field input.invalid {
    border-bottom: 1px solid var(--pink-4) !important;
    box-shadow: 0 1px 0 0 var(--pink-4) !important;
}
.input-field .helper-text:after {
    color: var(--pink-3) !important;
}
/* icon prefix focus color */
.input-field .prefix.active {
    color: var(--pink-4);
}
</style>
