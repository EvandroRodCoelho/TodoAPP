import { Button } from '../Button';
import { Container, ContainerProps } from './styles';

interface TaskProps extends ContainerProps {
  task: string;
  Click: () => void;
  onClickCheckbox: (index: number) => void;
  index: number;
}


export function Task({task,checked , Click, onClickCheckbox , index}:TaskProps) {


  return (
    <Container checked={checked}>
      <input type="checkbox"
        onClick={() => onClickCheckbox(index)} />
      <span>{task }</span>
      <Button text="Remover"
        background='red'
        color='#fff'
        fontWeight='500'
        onClick={()=>Click()}/>
    </Container>
  );
}
