import styled from 'styled-components';

export const Column = styled.th`
    border: 1px solid lightgray;
    font-weight: normal;
    background-color: var(--lighterGray);
`;

export const Title = styled.span`
    vertical-align: sub;
    user-select: none;
    font-size: 18px;
`;

export const Button = styled.button`
    position: relative;
    height: 25px;
    width: 25px;
    float: right;
    padding: 0;
    margin-left: -25px;
    cursor: pointer;
`;
