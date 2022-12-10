import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
export interface StylesButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    color?:string
    background?: string;
    fontWeight?: string;
    backgroundHover?: string;
}
export const ButtonContainer = styled.button<StylesButtonProps>`
    padding: 15px 10px;
    height: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 5px;
    color:${props => props.color ? props.color : '#000'};
    background-color: ${props => props.background};
    font-weight: ${props => props.fontWeight};
    &:hover {
        opacity: 0.8;
        background-color:${props => props.background}; ;
    }
`;
