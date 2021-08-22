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

        //change status here to "done"
    // setTodos((prevTodos) => {
    //     return prevTodos.filter((todo) => todo.id === todoId) { todo.status === 'done' } });
    // });


    // Now working.The code below I don't believe is necessary as Firebase handles all the updates on their end.
    //Think of it like  every time we update/change/add/delete a to do its runs the setTodo hook for us. I think...

    ///////////////////////////////////// MIGHT BE NEEDED LATER IN PROJECT?///////
    // setTodos((prev) => {
    //   const indexToUpdate = prev.findIndex((todo) => todo.id === selectedTodo.id);
    //   const oldValue = prev[indexToUpdate];
    //   const newValue = Object.assign({}, oldValue, {
    //     status: TodoStatus.inProgress,
    //   });
    //   const updatedTodos = [
    //     // all items to left of what we are updating
    //     ...prev.slice(0, indexToUpdate),
    //     // the updated value
    //     newValue,
    //     // all the items to the right of what we are updating
    //     ...prev.slice(indexToUpdate + 1),
    //     // skip what was updated
    //   ];

    //   return updatedTodos;
    // });
    //////////////////////////// MIGHT BE NEEDED LATER IN PROJECT?///////
    //