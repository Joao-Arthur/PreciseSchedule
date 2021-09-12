import styled, { css } from 'styled-components';
import ButtonBase from '../../../../Components/Button';
import Responsive from '../../../../Core/Responsive';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 4px 10px;
`;

export const Left = styled.div`
    display: flex;
    width: 10%;
`;

export const Center = styled.div`
    width: 80%;
    justify-content: center;
    display: flex;
`;

export const Right = styled.div`
    width: 10%;
    justify-content: flex-end;
    display: flex;
`;

const enabledCSS = css`
    :hover,
    :active {
        background-color: var(--lighterGray);
        color: var(--darkerGray);
    }
`;

const disabledCSS = css`
    background-color: var(--lighterGray);
    color: var(--darkGray);
`;

const common = css`
    border: 1px solid lightgray;
    color: var(--darkerGray);
    margin: 0 5px;
    font-size: 18px;
    transition: background-color 0.2s;
    background-color: white;
    ${enabledCSS}
`;

export const NavigationButton = styled(ButtonBase)`
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    ${common}
`;

export const InfoButton = styled(ButtonBase)`
    width: 4rem;
    height: 2.5rem;
    padding: 0;
    border: 1px solid lightgray;
    color: var(--darkerGray);
    margin: 0 5px;
    font-size: 18px;
    transition: background-color 0.2s;
    background-color: white;
    ${({ disabled }) => (disabled ? disabledCSS : enabledCSS)}
`;

export const NewButton = styled(ButtonBase)`
    width: 3rem;
    height: 2.5rem;
    padding: 0;
    font-size: 18px;
`;

export const Select = styled.select`
    border-radius: 4px;
    padding: 5px;
    height: 40px;
    width: ${Responsive`8``4`}rem;
    cursor: pointer;
    appearance: none;
    text-align-last: center;
    ${common}
`;
