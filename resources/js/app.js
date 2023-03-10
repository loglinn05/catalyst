/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import 'materialize-css'
import store from './store'
import router from './router/router.js'
import Root from './Root.vue'
import components from './components/UI'
import messages from './lang/messages.js'

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

await store.dispatch('getLocale')

let appLocale = store.state.middleware.user.locale;

const i18n = createI18n({
    locale: appLocale,
    fallbackLocale: 'en',
    messages: messages
});

await axios.post(
    '/api/setLocale',
    { userLocale: appLocale }
);

const app = createApp(Root);

components.forEach(component => {
    app.component(component.name, component)
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.use(router).use(store).use(i18n).mount('#app');
