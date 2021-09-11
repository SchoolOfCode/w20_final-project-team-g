export enum TodoStatus {
  todo,
  inProgress,
  done,
}

class TodoClass {
  id: string
  todoTitle: string
  date: string
  todoBody?: string
  createdBy?: string
  status?: TodoStatus
  urgency?: number

  constructor(
    todoTitle: string,
    createdBy: string,
    todoBody: string,
    urgency: number
  ) {
    this.todoTitle = todoTitle
    this.todoBody = todoBody
    this.id = new Date().toISOString()
    this.date = new Date().toISOString()
    this.createdBy = createdBy // later change to signed in user name/ID ?
    this.status = TodoStatus.todo // by default
    this.urgency = urgency || 3
  }
}

export default TodoClass

//Notes on adding futher database entries to show in DOM(i.e adding a body and notes):
//Add as variable above
// NewTodo line 20, add as parameter
// ToDosContext.tsx line 11(add todo) add parameter
//ibid line 43 (addTodoHandler)
//ibid line 37 (addTodoHandler in the params)
