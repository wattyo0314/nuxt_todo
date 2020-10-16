export const state = () => ({
  todos: [],
  title: ""
})

export const mutations = {
  addTodo: function(state, title) {
    if (!state.title.length) {
      return;
    }
    state.todos.add({
        title: title,
      });
      console.log(title)
    state.title = "";
    }
}