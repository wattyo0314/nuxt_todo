<template>
<v-row>
  <v-simple-table>
    <thead>
      <tr>
        <th>ID</th>
        <th>タイトル</th>
        <th>期限</th>
      </tr>
    </thead>
    <transition-group tag="tbody">
      <tr v-for="(todo, index) in todos" v-bind:key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.deadline }}</td>
        <td @click="removeTask"><v-icon>mdi-delete</v-icon></td>
        <td @click="editTask(index)">
          <v-icon>mdi-account-edit</v-icon>
        </td>
      </tr>
    </transition-group>
  </v-simple-table>
</v-row>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      title: ""
    }
  },
}
</script>