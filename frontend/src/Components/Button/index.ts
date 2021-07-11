import styled, { css } from 'styled-components';
import Responsive from '../../Core/Responsive';

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
    padding: ${Responsive`7``15`}px 0;
    font-size: ${Responsive`16``18`}px;

    ${({ disabled }) => (disabled ? disabledButton : enabledButton)}
`;

export default Button;
