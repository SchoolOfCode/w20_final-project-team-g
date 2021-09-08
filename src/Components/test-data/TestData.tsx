import { TodosContext } from '../../Store/TodosContext';
import React, { useContext } from 'react';
import firebase, { db } from '../../utilities/firebase';
const faker = require('faker');
const todoRef = firebase.firestore().collection('todos');

const TestData = () => {
  const todoRef = firebase.firestore().collection('todos');
  const todoCtx = useContext(TodosContext);
  let count = 0;
  let uuid = '';
  const onClick = () => {
    for (let i = 0; i < 3; i++) {
      //id and doc name need to be the same
      uuid = faker.random.uuid();
      todoRef.doc(uuid).set({
        id: uuid,
        createdBy: `${faker.name.firstName()} ${faker.name.lastName()}`,
        todoTitle: faker.random.words(2),
        date: new Date().toISOString(),
        todoBody: faker.lorem.words(4),
        urgency: Math.floor(Math.random() * 3) + 1,
        status: i,
      });
      //   count = count === 2 ? 0 : count;
      //   todoCtx.addTodo(title, name, body, radioValue); // saves to firebase
    }
  };

  return (
    <div>
      <button onClick={onClick}># Add Test Data # </button>
    </div>
  );
};

export default TestData;
