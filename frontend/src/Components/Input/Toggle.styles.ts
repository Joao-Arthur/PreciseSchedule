import styled from 'styled-components';

export const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
`;

export const Span = styled.span`
    position: absolute;
    transition: 0.4s;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--Gray);
    border-radius: 15px;
    border: 1px solid gray;

    :before {
        position: absolute;
        transition: 0.3s ease-in-out;
        content: '';
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 3px;
        background-color: white;
        border-radius: 50%;
    }
`;

export const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    :checked + ${Span} {
        background-color: var(--light);
    }

    :focus + ${Span} {
        box-shadow: 0 0 1px var(--light);
    }

    :checked + ${Span}:before {
        transform: translateX(29px);
    }
`;
