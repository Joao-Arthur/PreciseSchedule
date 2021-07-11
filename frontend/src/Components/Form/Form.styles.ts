import styled from 'styled-components';
import Responsive from '../../Core/Responsive';

export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    width: ${Responsive`500px``80%`};
    margin: auto;
    background-color: var(--lighterGray);
    border: 1px solid gray;
    border-radius: 4px;
    padding: 10px;
`;
