import { Button } from '../Button';
import { Container, ContainerProps } from './styles';

interface TaskProps extends ContainerProps {
  task: string;
  Click: () => void;
  onClickCheckbox: (index: number) => void;
  index: number;
  id: number;
}


export function Task({
  task, checked, Click, onClickCheckbox, index, id
}: TaskProps) {

  return (
    <Container checked={checked}>
      <input type="checkbox"
        onClick={() => onClickCheckbox(index)}
        checked={checked} id={`${id}`} />
      <label htmlFor={`${id}`}>{task}</label>
      <Button text="Remover"
        background='#FF495C'
        color='#FCFCFC'
        fontWeight='500'
        onClick={() => Click()}
        type='button'/>
    </Container>
  );
}
