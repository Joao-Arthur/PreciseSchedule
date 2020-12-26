import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    background-color: gray;
    box-shadow: 0px 0px 3px gray;
    justify-content: flex-end;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Subtitle = styled.h3`
    text-align: center;
`;

export const Anchor = styled.a`
    text-decoration: none;
`;

export const Label = styled.label`
    padding: 5px 0;
`;

export const P = styled.p`
    margin: 0;
`;

export const Button = styled.button`
    color: white;
    background-color: #6239C6;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px 0;
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
`;

export const RedirectContainer = styled.div`
    padding: 10px;
    width: 25%;
    margin: 10px auto;
    border: 1px solid gray;
    border-radius: 4px;
`;