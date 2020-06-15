import { Todo }  from "@/models/Todo.js";

export default {
    namespaced: true,

    state: {
        todos: []
    },

    getters: {
        /**
         * Get the todos.
         * @param {Object} state - the current state of todo module.
         */
        todos: state => state.todos,
    },

    mutations: {
        /**
         * Add new todo.
         * @param {Object} state - the current state of todo module.
         * @param {Todo} todo - the object of the todo.
         */
        CREATE_TODO: (state, todo) => {
            state.todos.push(todo);
        },

        /**
         * Set the completed status of todo to true.
         * @param {Object} state - the current state of todo module.
         * @param {Number} todoIndex - the index of the todo in todos array.
         */
        COMPLETE_TODO: (state, todoIndex) => {
            const currentTodo = state.todos[todoIndex];
            currentTodo.completed = true;
            state.todos[todoIndex] = currentTodo;
        },

        /**
         * Delete the todo with the give index.
         * @param {Object} state - the current state of todo module.
         * @param {Number} todoIndex - the index of the todo in todos array.
         */
        DELETE_TODO: (state, todoIndex) => {
            state.todos.splice(todoIndex, 1);
        }
    },

    actions: {
        /**
         * Call the CREATE_TODO mutation to add new todo.
         * @param {Function} commit - the function that calls the CREATE_TODO mutation.
         * @param {String} todoText
         */
        addTodo: ({ commit }, todoText) => {
            const todo = new Todo(todoText);
            commit('CREATE_TODO', todo);
        },


        /**
         * Call the COMPLETE_TODO mutation to add new todo.
         * @param {Function} commit - the function that calls the COMPLETE_TODO mutation.
         * @param {Number} todoIndex - the index of the todo in todos array.
         */
        completeTodo: ({ commit }, todoIndex) => {
            commit('COMPLETE_TODO', todoIndex);
        },

        /**
         * Call the DELETE_TODO mutation to add new todo.
         * @param {Function} commit - the function that calls the DELETE_TODO mutation.
         * @param {Number} todoIndex - the index of the todo in todos array.
         */
        deleteTodo: ({ commit }, todoIndex) => {
            commit('DELETE_TODO', todoIndex);
        }
    }
}