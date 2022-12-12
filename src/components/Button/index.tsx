import { ButtonContainer, StylesButtonProps } from './styles';
interface ButtonProps extends StylesButtonProps{
  text: string;
}

export function Button(props:ButtonProps) {


  return (
    <ButtonContainer {...props} >
      {props.text}
    </ButtonContainer>
  );
}
