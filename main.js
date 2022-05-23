const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'fare A',
                isDone: false,
            },
            {
                text: 'fare B',
                isDone: false,
            },
            {
                text: 'fare C',
                isDone: false,
            },
        ]
    },
    
    methods: {
        doIt(index) {
            this.todos[index].isDone = !this.todos[index].isDone;
        },
    },
});