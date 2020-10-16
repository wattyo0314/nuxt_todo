<template>
  <v-app>
    <v-container>
      <v-row>
        <v-app-bar light app>
          <v-toolbar-title>todo</v-toolbar-title>
        </v-app-bar>
      </v-row>
      <Form />
      <v-row>
        <v-btn-toggle app>
        <v-btn value="未完了" color="primary">
          未完了
        </v-btn>
        <v-btn value="作業中" color="primary">
          作業中
        </v-btn>
        <v-btn value="完了" color="primary">
          完了
        </v-btn>
        </v-btn-toggle>
      </v-row>
      <List />
    </v-container>
  </v-app>
</template>

<script>

import Form from '~/components/Form.vue'
import List from '~/components/List.vue'
import {mapState} from 'vuex';



export default {
  
}
</script>
