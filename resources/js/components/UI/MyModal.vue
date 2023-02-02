<template>
    <div :id="id + '-modal'" class="modal">
        <div class="modal-content">
            <div class="row">
                <div class="col s12">
                    <slot></slot>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <my-button
                :flat="true"
                :wavesColor="'purple'"
                class="modal-close"
                @click="$emit('modalFooterButtonClicked')"
            >{{ modalFooterButtonText }}</my-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyModal",
    props: {
        id: {
            type: String,
            required: true
        },
        modalFooterButtonText: {
            type: String,
            required: true
        }
    },
    mounted() {
        let element = document.getElementById(this.id + '-modal');
        this.$store.state.helper.modalInstances[this.id] = M.Modal.init(element);
    }
}
</script>

<style scoped>
.modal {
    max-height: 100%;
}
.modal .modal-content {
    padding-bottom: 0;
}
.modal .modal-content .row {
    margin-bottom: 0 !important;
}
</style>
