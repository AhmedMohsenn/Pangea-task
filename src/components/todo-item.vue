<template lang="html">
  <v-card
    :color="cardColor">
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ todo.text }}</h3>
      </div>
    </v-card-title>
    <v-btn @click="completeTodo">
      Complete
    </v-btn>
    <v-btn 
      color="error"
      @click="deleteTodo">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
import { Todo } from "@/models/Todo.js";

export default {
  name: "TodoItem",

  props: {
    todo: {
      type: Todo,
      required: true
    },
    todoIndex: {
      type: Number,
      required: true
    }
  },

  computed: {
    cardColor: function() {
      return this.todo.completed ? "success" : "";
    }
  },

  methods: {
   deleteTodo() {
     this.$store.dispatch("todo/deleteTodo", this.todoIndex);
   },

   completeTodo() {
     this.$store.dispatch("todo/completeTodo", this.todoIndex);
   }
  },
}
</script>

<style lang="css">
</style>
