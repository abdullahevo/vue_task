<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-layout align-center fill-height justify-center>
        <v-flex xs6>
          <TodoForm />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import TodoForm from '@/components/todo-form';

export default {
	name: 'App',
	components: {
		TodoForm
	},
	data() {
		return {
			title: 'Vue Todos'
		};
	}
};
</script>
