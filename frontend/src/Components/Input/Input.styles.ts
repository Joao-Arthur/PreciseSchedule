import styled, { css } from 'styled-components';

export const InputStyle = css`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px;
    font-size: 16px;
    background-color: white;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
`;

export const Input = styled.input`
    ${InputStyle}
`;
