// to delete from state & firebase
// setTodos((prev) => {
//   return prev.filter((todo) => {
//     // const todoRef = firebase.database().ref('currentTodo').child(todosID);
//     // todoRef.remove();
//     return todo.id !== todosID;
//   });
// });

// const todoRef = firebase.database().ref('currentTodo').child(todosID);
// todoRef.remove();

    //mine
    // todoref.on('value', (snapshot: any) => {
    //   const todos = snapshot.val();

    //   const todolist = [];
    //   for (const key in todos) {
    //     todolist.push(todos[key]);

    //     setTodos(todolist);
    //   }
    // });