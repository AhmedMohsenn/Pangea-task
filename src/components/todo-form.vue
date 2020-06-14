<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    append-outer-icon="mdi-map-marker"
    solo
    @keydown.enter="createTodo"
    v-model="todoText"
  />
</template>

<script>
export default {
  name: "TodoForm",
  data() {
    return {
      todoText: ""
    }
  },

  methods: {
    createTodo() {
      this.$store.dispatch("todo/addTodo", this.todoText);
      this.todoText = "";
    }
  }
}
</script>

<style lang="css">
</style>
