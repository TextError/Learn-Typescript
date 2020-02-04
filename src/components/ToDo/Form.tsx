import React, { useState } from 'react';
import { InputEvt, FormElem } from './types';

export const Form = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onChange = (e: InputEvt):void => setValue(e.target.value);

  const onSubmit = (e: FormElem):void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text:string):void => {
    const newToDo: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newToDo)
  };

  const onComplete = (index:number):void => {
    const completeTodo:ITodo[] = [...todos];
    completeTodo[index].complete = !completeTodo[index].complete;
    setTodos(completeTodo);
  };

  const onRemove = (index:number):void => {
    const restTodo:ITodo[] = [...todos];
    restTodo.splice(index, 1);
    setTodos(restTodo);
    // const removeTodo:ITodo = todos[index];
    // setTodos([...todos.filter((el:ITodo) => el !== removeTodo)]);
  };
  
  return (
    <>
      <h1>ToDo List</h1>
      <form noValidate onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} required />
        <button type='submit'>Add ToDo</button>
      </form>
      <section>
        {todos.map(({ text, complete }:ITodo, index:number) => 
          <div key={index}>
            <span style={{ textDecoration: complete ? 'line-through' : '' }} >{text}</span>
            {' '}
            <button type='button' onClick={() => onComplete(index)}>
              { complete ? 'Incomplete' : 'Complete' }
            </button>
            {' '}
            <button type='button' onClick={() => onRemove(index)}>Remove</button>
          </div>
        )}
      </section>
    </>
  )
};

interface ITodo {
  text: string,
  complete: boolean
}