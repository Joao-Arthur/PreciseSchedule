import styled, { css } from 'styled-components';
import Responsive from '../../Core/Responsive';

const primaryCSS = css`
    cursor: pointer;
    background-color: var(--primary);

    :hover {
        background-color: var(--dark);
    }

    :active {
        background-color: var(--darker);
    }
`;

const secondaryCSS = css`
    cursor: pointer;
    color: var(--dark);
    background-color: white;
`;

const disabledButton = css`
    background-color: gray;
    cursor: wait;
`;

type buttonProps = {
    secondary?: boolean;
};

const Button = styled.button<buttonProps>`
    color: white;
    border: 1px solid gray;
    border-radius: 4px;
    padding: ${Responsive`7``15`}px 0;
    font-size: ${Responsive`16``18`}px;
    ${({ disabled, secondary }) =>
        disabled ? disabledButton : secondary ? secondaryCSS : primaryCSS}
`;

export default Button;
