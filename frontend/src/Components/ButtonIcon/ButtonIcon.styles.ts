import styled from 'styled-components';

export const Transparent = styled.button`
    background-color: unset;
    cursor: pointer;
    border: none;
`;

export const Button = styled.button`
    background-color: unset;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: var(--lightGray);
        border: 1px solid lightgray;
    }

    :active {
        background-color: var(--defaultGray);
        border: 1px solid lightgray;
    }
`;
