import '@testing-library/jest-dom';
import PomodoroTimer from '../PomodoroTimer/PomodoroTimer';
import TodoItem from './TodoItem';
import userEvent from '@testing-library/user-event';

describe('Todoitem component', () => {

   // // is this an integration test?! 
  // test('renders the pomodoro timer component when it is clicked', () => {

  //   // arrange
  //   render(<TodoItem text="hi" createdBy="string" todoBody="string" onRemoveTodo={() => void} />);

  //   // act
  //   const startTodoDiv = screen.getByTestId("startTodoDiv")
  // userEvent.click(startTodoDiv)  // element that simulates click

  // //assert the outcome
  //   const pomoClock = screen.get(<PomodoroTimer/>) // lol
  //   expect(pomoClock).toBeInTheDocument()

  // });

  test('does not render pomodoro timer if delete button is clicked', () => {});
});
