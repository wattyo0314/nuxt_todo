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
    <tbody>
      <tr v-for="todo in todos" v-bind:key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.deadline }}</td>
        <td ><v-icon>mdi-delete</v-icon></td>
        <td>
          <v-icon>mdi-account-edit</v-icon>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</v-row>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      title: ""
    }
  },
  computed:
    mapState(['todos'])
}
</script>