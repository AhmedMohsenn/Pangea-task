import { Todo }  from "@/models/Todo.js";

export default {
    namespaced: true,

    state: {
        todos: []
    },

    getters: {
        todos: state => state.todos,
    },

    mutations: {
        CREATE_TODO: (state, todo) => {
            state.todos.push(todo);
        },

        COMPLETE_TODO: (state, todoIndex) => {
            const currentTodo = state.todos[todoIndex];
            currentTodo.completed = true;
            state.todos[todoIndex] = currentTodo;
        },

        DELETE_TODO: (state, todoIndex) => {
            state.todos.splice(todoIndex, 1);
        }
    },

    actions: {
        addTodo: ({ commit }, todoText) => {
            const todo = new Todo(todoText);
            commit('CREATE_TODO', todo);
        },

        completeTodo: ({ commit }, todoIndex) => {
            commit('COMPLETE_TODO', todoIndex);
        },

        deleteTodo: ({ commit }, todoIndex) => {
            commit('DELETE_TODO', todoIndex);
        }
    }
}