import styled from 'styled-components';
import Responsive from '../../../../Core/Responsive';
import ButtonBase from '../../../../Components/Button';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    padding: 4px 0;
`;

export const Button = styled(ButtonBase)`
    background-color: unset !important;
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 18px;
    border: 1px solid lightgray;
    cursor: pointer;
    color: var(--darkerGray);
    padding: 0;
`;

export const Title = styled.p`
    width: ${Responsive`180``100`}px;
    font-size: 18px;
    margin: 10px 0;
    text-align: center;
    white-space: nowrap;
    list-style: none;
    color: var(--darkerGray);
`;
