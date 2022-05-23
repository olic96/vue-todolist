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
        // MILESTONE 1
        doIt(index) {
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        // MILESTONE 2
        hide(index) {
            this.todos.splice(index, 1);
        },
    },
});