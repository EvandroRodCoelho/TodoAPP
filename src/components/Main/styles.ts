import styled from 'styled-components';

export const Container = styled.main`
    margin: 10px 20px;
`;
export const ContainerNewTask = styled.div`
    margin:  0 auto;
    max-width: 1100px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    input{
        flex: 1;
        height: 25px;
        font-size: 18px;
        padding: 15px 10px;
        border-radius: 5px;

    }

    @media screen and (max-width: 400px) {
        width: 100%;
        input{
            width: 20%;
            margin-left: 12px;
        }
        button{
            margin-right: 20px;
        }
    }
`;
