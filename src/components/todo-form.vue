<template lang="html">
<div>
<h1 class="display-3 font-weight-medium">TODOS</h1>
  <v-text-field
      class="mb-4"
      label="Todo"
      @keydown.enter="addTodo()"
      autofocus
      browser-autocomplete="on"
      clearable
      flat
      solo
      v-model="newTodo"
      placeholder="What do you have to do?"
    
  />
   <v-list class="pa-0">
      <template v-for="todo in todos ">
      <TodoItem :todo="todo" class="mb-3" />
      </template>
   </v-list> 

    
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import TodoItem from '@/components/todo-item';
export default {
	components: {
		TodoItem
	},
	data() {
		return {
			newTodo: ''
		};
	},
	computed: {
		todos() {
			return this.$store.state.todos;
		}
	},
	methods: {
		addTodo() {
			const text = this.newTodo.trim();
			if (text) {
				this.$store.dispatch('addTodos', text);
			}
			this.newTodo = '';
		}
	}
};
</script>

<style lang="css">
</style>
