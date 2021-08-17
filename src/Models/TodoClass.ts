const TO_DO = 'todo';
const IN_Progress = 'in-progress';
const Done = 'done';

class TodoClass {
  id: string;
  todoTitle: string;
  todoBody: string;
  user: string;
  date: string;
  status: string;

  constructor(todoTitle: string) {
    this.todoTitle = todoTitle;
    this.todoBody = '';
    this.id = String(Math.random());
    this.date = new Date().toISOString();
    this.user = ''; // later change to signed in user name/ID ?
    this.status = TO_DO;  // by default 
  }
}

export default TodoClass;
