import { Todo }  from "@/models/Todo.js";

export default {
    namespaced: true,

    state: {
        todos: []
    },

    getters: {
        todos: state => state.todos,
        getTodoById: state => id => state.todos.filter(t => t.id == id)
    },

    mutations: {
        CREATE_TODO: (state, todo) => {
            state.todos.push(todo);
            console.log(state.todos);
        },

        UPDATE_TODO: (state, payload) => {
            Object.assign(state.todos[payload.todoIndex], { completed: payload.completed });
        },

        DELETE_TODO: (state, todo) => {
            const filteredTodos = state.todos(t => t.id !== todo.id);
            state.todos = filteredTodos;
        }
    },

    actions: {
        addTodo: ({ commit, state }, todoText) => {
            const todo = new Todo(todoText);
            todo.id = state.todos.length;
            commit('CREATE_TODO', todo);
        },

        updateTodoStatus: ({ commit }, payload) => {
            commit('UPDATE_TODO', payload);
        },

        deleteTodo: ({ commit }, todo) => {
            commit('DELETE_TODO', todo);
        }
    }
}