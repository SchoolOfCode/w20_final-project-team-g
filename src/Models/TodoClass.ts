const TO_DO = 'todo';
const IN_Progress = 'in-progress';
const Done = 'done';

class TodoClass {
  id: string;
  todoTitle: string;
  date: string;
  todoBody?: string;
  createdBy?: string;
  status?: string;

  constructor(todoTitle: string) {
    this.todoTitle = todoTitle;
    this.todoBody = '';
    this.id = new Date().toISOString();
    this.date = new Date().toISOString();
    this.createdBy = ''; // later change to signed in user name/ID ?
    this.status = TO_DO; // by default
  }
}

export default TodoClass;
