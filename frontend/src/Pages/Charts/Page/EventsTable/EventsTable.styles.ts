import styled, { css } from 'styled-components';

export const Container = styled.table`
    flex: 1;
    border-collapse: collapse;
    width: 100vw;
`;

const border = css`
    border: 1px solid lightgray;
`;

export const Column = styled.td`
    ${border}
    padding: 0 5px;
    font-size: 14px;
`;

export const Left = styled.td`
    ${border}
    text-align: left;
    padding: 0 5px;
`;

export const Center = styled.td`
    ${border}
    text-align: center;
`;

export const Disabled = styled.td`
    ${border}
    background-color: var(--lighterGray);
`;
