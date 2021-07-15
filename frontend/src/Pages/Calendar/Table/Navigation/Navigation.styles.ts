import styled, { css } from 'styled-components';
import ButtonBase from '../../../../Components/Button';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    padding: 4px 0;
`;

const common = css`
    background-color: unset !important;
    border: 1px solid lightgray;
    color: var(--darkerGray);
    margin: 0 5px;
    font-size: 18px;
`;

export const Button = styled(ButtonBase)`
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    transition: font-size 0.2s;
    :hover,
    :active {
        font-size: 20px;
    }

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
