<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-form @submit.prevent="addTodo" >
          <v-card-text>
            <v-text-field label="追加するタスク" placeholder="タスクを入力してください" v-model="title"></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field type="date" label="締切日" ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-textarea label="内容" placeholder="内容を入力してください"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn type="submit">送信する</v-btn>
          </v-card-actions>
      </v-form>
    </v-card>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      title: ""
    }
  },
  methods: {
    addTodo: function() {
      this.$store.commit('todos/addTodo', this.title),
      this.title = ''
    }
  },
}
</script>