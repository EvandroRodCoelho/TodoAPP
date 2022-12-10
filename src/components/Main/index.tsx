import { ChangeEvent, useState,KeyboardEvent } from 'react';
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
      setTasks((previous)=>[...previous, newTodo]);
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
  return (
    <Container>
      <ContainerNewTask>
        <input type="text"
          onChange={(e) => handleText(e)}
          onKeyUp={(event)=>keyUpEnter(event)} />
        <Button text='Adicionar'
          background='transparent'
          fontWeight='500'
          onClick={()=>addTodo()}
        />
      </ContainerNewTask>
      {tasks.map((value, index) => (
        <Task
          Click={() => removeTodo(value.id)}
          task={value.task}
          checked={value.checked}
          key={value.id}
          onClickCheckbox={() => changeCheckbox(index)}
          index={index} />

      ))}
    </Container>
  );
}
