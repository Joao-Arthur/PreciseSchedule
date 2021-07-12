import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
`;

export const Button = styled.button`
    width: 2rem;
    height: 2rem;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    background-color: unset;
    color: white;
`;

export const Title = styled.p`
    width: 150px;
    font-size: 18px;
    margin: 10px 0;
    text-align: center;
    white-space: nowrap;
    list-style: none;
    color: white;
`;
