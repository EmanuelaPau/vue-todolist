console.log('hello');

const { createApp } = Vue;

createApp({
    data() {

        return {
            message: 'Hello Vue!',
        }
    },
    methods: {
    }
}).mount('#app') 