import { ChangeEvent, useState, useEffect } from 'react';
import { useTodo } from '../../hooks/useTodo';
import { Button } from '../Button';
import { Task } from '../Task';
import { Container, ContainerNewTask } from './styles';
export function Main() {

  const [isFirstRender, setIsFirstRender] = useState(true);
  const { removeTodo, keyUpEnter,
    changeCheckbox, addTodo, setTasks,handleText,todos} = useTodo();



  useEffect(() => {
    if (isFirstRender) {
      const initialList = JSON.parse(`${localStorage.getItem('todo')}` );
      if (initialList) setTasks(initialList);
      setIsFirstRender(false);
      return;
    }

    localStorage.setItem('todo', JSON.stringify(todos));
  },[todos]);


  return (
    <Container>
      <ContainerNewTask>
        <input type="text"
          onChange={(event) => handleText(event)}
          onKeyUp={(event) => keyUpEnter(event)}
          placeholder='Digite sua tarefa'/>
        <Button text='+'
          background='transparent'
          fontWeight='500'
          onClick={()=>addTodo()}
          type="button"
        />
      </ContainerNewTask>
      {todos.map((value, index) => (
        <Task
          Click={() => removeTodo(value.id)}
          task={value.task}
          checked={value.checked}
          key={value.id}
          onClickCheckbox={() => changeCheckbox(index)}
          index={index}
          id={value.id} />

      ))}
    </Container>
  );
}
