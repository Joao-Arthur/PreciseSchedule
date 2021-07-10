import styled from 'styled-components';

type props = {
    buttonSize: number;
};

export const Button = styled.button<props>`
    background-color: unset;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ buttonSize }) =>
        `height: ${buttonSize}px;
         width: ${buttonSize}px;`}

    :hover {
        background-color: var(--lighterGray);
        border: 1px solid lightgray;
    }

    :active {
        background-color: var(--lightGray);
        border: 1px solid lightgray;
    }
`;
