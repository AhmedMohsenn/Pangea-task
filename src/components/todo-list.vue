<template lang="html">
  <div>
    <TodoItem 
      class="mb-3"
      v-for="(todo, idx) in todos"
      :key="idx"
      :todo="todo"
      :todo-index="idx" />
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import { mapGetters } from "vuex";
export default {
  components: {
    TodoItem,
  },

  computed: {
    ...mapGetters('todo', {
      todos: 'todos'
    })
  },
}
</script>

<style lang="css">
</style>
