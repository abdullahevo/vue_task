import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: JSON.parse(localStorage.getItem('todo')) || []
    },
    mutations: {
        addTodos(state, todo) {
            state.todos.push(todo)
                // console.log(todo)
            localStorage.setItem('todo', JSON.stringify(state.todos));
        },
        deleteTodo(state, todo) {
            state.todos.splice(state.todos.indexOf(todo), 1)
            localStorage.setItem('todo', JSON.stringify(state.todos));
        },

        editTodo(state, { todo, text = todo.text, done = todo.done }) {
            todo.text = text
            todo.done = done
            localStorage.setItem('todo', JSON.stringify(state.todos));
        },
        toggleComplete(state, todo, text, done) {
            done = todo.done
            text = todo.text
            localStorage.setItem('todo', JSON.stringify(state.todos));
        }
    },
    actions: {
        addTodos({ commit }, text) {
            commit('addTodos', {
                text,
                done: false,
            })

        },
        deleteTodo({ commit }, todo) {
            commit('deleteTodo', todo)
                // console.log(todo)
        },
        editTodo({ commit }, { todo, text, done }) {
            commit('editTodo', { todo, text, done })
        },
    }
})