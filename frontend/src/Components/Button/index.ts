import styled, { css } from 'styled-components';

const enabledButton = css`
    background-color: var(--dark);
    cursor: pointer;
`;

const disabledButton = css`
    background-color: gray;
    cursor: wait;
`;

const Button = styled.button`
    color: white;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 7px 0;
    font-size: 16px;

    ${({ disabled }) => (disabled ? disabledButton : enabledButton)}
`;

export default Button;
