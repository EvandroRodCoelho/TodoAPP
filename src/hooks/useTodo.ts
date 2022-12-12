import { useState, KeyboardEvent,ChangeEvent, useCallback } from 'react';
interface TodoProps {
    id: number;
    task: string;
    checked: boolean;
  }
export function useTodo(){
  const [todos, setTodos] = useState<TodoProps[] | []>([]);
  const [taskText, setTaskText] = useState('');

  const handleText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newTodoText = event.target.value;
    setTaskText(newTodoText);
  }, []);

  function addTodo() {
    if (taskText) {
      const newTodo: TodoProps = {
        id: Math.floor(Date.now() * Math.random()), //Gerar id aleatório
        task: taskText,
        checked: false
      };

      setTodos((previous) => [...previous, newTodo]);
    }
  }

  function removeTodo(idTodo: number) {
    const newTodoList = todos.filter(task => task.id != idTodo);
    setTodos(newTodoList);
  }
  function changeCheckbox(index: number) {
    const allTodo = [...todos];
    allTodo[index].checked = !allTodo[index].checked;
    setTodos(allTodo);
  }
  function keyUpEnter (event: KeyboardEvent<HTMLInputElement>) {
    if (event.code == 'Enter' && taskText) {
      addTodo();
    }
  }

  return {
    removeTodo,
    keyUpEnter,
    changeCheckbox,
    addTodo,
    setTasks: setTodos,
    handleText,
    todos,
    taskText
  };

}
