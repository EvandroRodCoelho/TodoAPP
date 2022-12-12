import { ChangeEvent, useState,KeyboardEvent, useEffect } from 'react';
import { Button } from '../Button';
import { Task } from '../Task';
import { Container, ContainerNewTask } from './styles';
interface TasksProps {
  id: number;
  task: string;
  checked: boolean;
}
export function Main() {
  const [tasks, setTasks] = useState<TasksProps[] | []>([]);
  const [taskText, setTaskText] = useState('');
  const [isFirstRender, setIsFirstRender] = useState(true);

  function handleText(event:ChangeEvent<HTMLInputElement>) {
    const newTodoText = event.target.value;
    setTaskText(newTodoText);
  }

  function addTodo() {
    if (taskText) {
      const newTodo: TasksProps = {
        id: Math.floor(Date.now() * Math.random()), //Gerar id aleatório
        task: taskText,
        checked: false
      };

      setTasks((previous) => [...previous, newTodo]);
      localStorage.setItem('todo', JSON.stringify(tasks));
    }
  }

  function removeTodo(idTodo: number) {
    const newTodoList = tasks.filter(task => task.id != idTodo);
    setTasks(newTodoList);
  }

  function changeCheckbox(index:number) {
    const allTodo = [...tasks];
    allTodo[index].checked = !allTodo[index].checked;
    setTasks(allTodo);
  }
  function keyUpEnter(event:KeyboardEvent<HTMLInputElement>) {
    if (event.code == 'Enter' && taskText) {
      addTodo();
    }
  }


  useEffect(() => {
    if (isFirstRender) {
      const initialList = JSON.parse(`${localStorage.getItem('todo')}` );
      if (initialList) setTasks(initialList);
      setIsFirstRender(false);
      return;
    }

    localStorage.setItem('todo', JSON.stringify(tasks));
  },[tasks]);


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
      {tasks.map((value, index) => (
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
