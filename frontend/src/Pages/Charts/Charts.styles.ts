import styled from 'styled-components';
import { Mobile } from '../../Core/Responsive';
import ButtonBase from '../../Components/Button';

export const Button = styled(ButtonBase)`
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border: 1px solid lightgray;
    color: var(--darkerGray);
    margin: 0 5px;
    font-size: 18px;
    transition: background-color 0.2s;
    background-color: white;

    :hover {
        background-color: var(--lighterGray);
        color: var(--darkGrey);
    }

    :active {
        background-color: var(--lighterGray);
        color: var(--darkerGrey);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    ${Mobile`overflow: auto;`};
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 4px 10px;
`;

export const ChartsContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const Column = styled.div`
    display: flex;
    flex: 1;
`;
