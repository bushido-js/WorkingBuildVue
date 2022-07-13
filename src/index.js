// import Vue from 'vue';
// import App from './components/app/app.vue';

// new Vue({
//     el:'#root',
//     render: h => h(App)
// });


import { createApp } from 'vue'
import App from './components/app/app.vue'

export const eventBus = createApp(App)

createApp(App).mount('#root')