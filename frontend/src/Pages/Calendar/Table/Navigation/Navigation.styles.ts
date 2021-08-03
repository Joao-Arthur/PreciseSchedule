import styled, { css } from 'styled-components';
import ButtonBase from '../../../../Components/Button';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding: 4px 10px;
`;

const common = css`
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

export const Button = styled(ButtonBase)`
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    ${common}
`;

export const Select = styled.select`
    border-radius: 4px;
    padding: 5px;
    height: 40px;
    width: 130px;
    cursor: pointer;
    appearance: none;
    text-align-last: center;
    ${common}
`;
