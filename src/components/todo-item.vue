<template lang="html">
  <v-card >
    <template v-if="!editing">
        <v-card-title primary-title :class="{ Complete: todo.done}">
        <!-- <div > -->
        <h3 @dblclick="editing = true" class="headline mb-0"  >{{ todo.text }}</h3>
        <!-- </div> -->
        </v-card-title>
        <v-btn class="" @click="Completed()">
        Complete
        </v-btn>
        <v-btn @click="deleteTodo()" color="error">
        Delete
        </v-btn>
    </template>
     <v-text-field
      :value="todo.text"
      @blur="doneEdit"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      clearable
      color="primary"
      flat
      hide-details
      maxlength="1023"
      ref="input"
      solo
      v-else
 
    ></v-text-field>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	data() {
		return {
			editing: false
		};
	},
	props: ['todo'],
	methods: {
		...mapActions(['editTodo', 'deleteTodo']),
		doneEdit(e) {
			const text = e.target.value.trim();
			const { todo } = this;
			console.log(this);
			if (!text) {
				this.deleteTodo(todo);
			} else if (this.editing) {
				console.log(this.editing);
				this.editTodo({
					todo,
					text
				});
				this.editing = false;
			}
		},
		cancelEdit() {
			this.editing = false;
		},
		Completed() {
			const { todo } = this;
			todo.done = true;
			this.$store.commit('toggleComplete', todo, todo.done);
			console.log(todo.done);
		}
	}
};
</script>

<style lang="css">
.Complete {
	text-decoration: line-through;
	color: #4a944d;
}
</style>
