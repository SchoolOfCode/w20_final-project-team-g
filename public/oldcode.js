// const fetchAndModifyData = () => {
// fetch
// moodRef.onSnapshot((querySnapshot) => {
//   const newObj = [];
//   querySnapshot.forEach((doc) => {
//     newObj.push(doc.data());
//   });
//   // remove parent key
//   const editedObj = removeJSONString(newObj);
//   setAllMoods(editedObj);
// });
// extract all moods
// console.log(allMoodsFromDB);
// create the new mood object

// console.log('NEW MOOD ARRAY FROM ASYNC: ' + moodArray);
// console.log(moodArray);
// console.log('moodArray inside fetchAndModifyData', moodArray);
// console.log('allMoodsObj after method', allMoodsObj);
// };
// console.log('moodArray outside function', moodArray);

// console.log('moodArray', moodArray);
// function removeJSONString(obj) {
//   // store all keys of this object for later use
//   let keys = Object.keys(obj);
//   // for each key update the "json" key
//   keys.map((key) => {
//     // updates only if it has "json"
//     if (obj[key].hasOwnProperty('moodData')) {
//       // assign the current obj a new field with "json" value pair
//       Object.assign(obj[key], obj[key]['moodData']);
//       // delete "json" key from this object
//       delete obj[key]['moodData'];
//     }
//   });
//   // updated all fields of obj
//   return obj;
// }

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
