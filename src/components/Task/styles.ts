import styled from 'styled-components';
export interface ContainerProps {
    checked: boolean;
}
export const Container = styled.div<ContainerProps>`
    margin:  15px auto;
    max-width: 1100px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    border-radius: 5px;
    border: solid 1px #000;
    padding: 14px 10px;
    label{
        flex: 1;
        opacity:${props => props.checked && '0.7'};
        text-decoration:${props => props.checked ? 'line-through' : 'none'};
    }

    & + div{
        margin-top: 18px;
    }


    @media screen and (max-width: 400px) {
        width: 90%;
        margin-top: 10px;

    }


`;
