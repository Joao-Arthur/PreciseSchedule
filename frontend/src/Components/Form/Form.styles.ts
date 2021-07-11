import styled, { css } from 'styled-components';
import Responsive from '../../Core/Responsive';
import ButtonBase from '../Button';

export const Container = styled.div`
    width: ${Responsive`500px``80%`};
    display: flex;
    flex-direction: column;
    margin: auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: normal;
    margin: 10px;
`;

const containerCSS = css`
    background-color: var(--lighterGray);
    border: 1px solid gray;
    border-radius: 4px;
    width: 100%;
`;

export const FormContainer = styled.div`
    ${containerCSS}
`;

export const CustomForm = styled.form`
    padding: 10px;
`;

export const FooterContainer = styled.div`
    margin-top: 10px;
    ${containerCSS}
`;

export const FooterContent = styled.div`
    padding: 10px;
`;

export const Button = styled(ButtonBase)`
    width: 100%;
    margin-top: 10px;
`;
