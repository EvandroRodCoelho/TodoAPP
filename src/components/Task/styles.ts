import styled from 'styled-components';
export interface ContainerProps {
    checked: boolean;
}
export const Container = styled.div<ContainerProps>`
    margin:  15px auto;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;

    border: solid 1px #000;
    padding: 14px 10px;

    span{
        flex: 1;
        text-decoration:${props => props.checked ? 'line-through' : 'none'};
    }

    & + div{
        margin-top: 18px;
    }

`;
