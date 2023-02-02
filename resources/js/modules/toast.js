import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

function toast(title, type = 'danger', description = '')
{
    const {close} = createToast(
        {
            title: title,
            description: description
        },
        {
            type: type,
            position: 'top-center',
            transition: 'zoom',
            showIcon: true
        }
    );
    return {close};
}

export default {
    dangerToast(message) {
        toast(message);
    },
    successToast(message) {
        toast(message, 'success')
    }
}
