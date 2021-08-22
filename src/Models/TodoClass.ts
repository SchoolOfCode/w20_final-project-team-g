export enum TodoStatus {
  todo,
  inProgress,
  done,
}

class TodoClass {
  id: string;
  todoTitle: string;
  date: string;
  todoBody?: string;
  createdBy?: string;
  status?: TodoStatus;

  constructor(todoTitle: string) {
    this.todoTitle = todoTitle;
    this.todoBody = '';
    this.id = new Date().toISOString();
    this.date = new Date().toISOString();
    this.createdBy = ''; // later change to signed in user name/ID ?
    this.status = TodoStatus.todo; // by default
  }
}

export default TodoClass;
