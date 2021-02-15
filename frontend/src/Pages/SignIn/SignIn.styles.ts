import styled from 'styled-components';
import LinkBase from '../../Components/Core/Link';

export const Title = styled.h1`
    text-align: center;
`;

export const Label = styled.label`
    padding: 5px 0;
    font-size: 12px;
    font-weight: bold;
    color: #333;
`;

export const Button = styled.button`
    color: white;
    background-color: #6239c6;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 7px 0;
    font-size: 16px;
    cursor: pointer;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: auto;
    background-color: #f7f7fa;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 10px;
`;

export const FieldContainer = styled.div`
    padding: 5px 0;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px;
    font-size: 16px;
`;

export const RedirectContainer = styled.div`
    padding: 10px;
    width: 25%;
    margin: 10px auto;
    border: 1px solid gray;
    border-radius: 4px;
`;

export const Link = styled(LinkBase)`
    &:hover {
        text-decoration: underline;
    }
`;
