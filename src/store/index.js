import Vue from 'vue'
import Vuex from 'vuex'
import todosModule from "@/store/modules/todos.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo: todosModule
  }
})
