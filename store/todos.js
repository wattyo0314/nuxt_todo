
export const state = () => ({
  todos: [],
})

export const mutations = {
  addTodo: function(state, title) {
    state.todos.push({
        title: title,
      });
      console.log(title)
    }
}

