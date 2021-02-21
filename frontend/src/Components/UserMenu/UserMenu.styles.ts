import styled from 'styled-components';
import LinkBase from '../Core/Link';

export const Container = styled.nav`
    display: flex;
    position: absolute;
    background-color: white;
    right: 0;
    top: 41px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    padding: 10px 15px;
    border: 1px solid gray;
    cursor: pointer;
`;

export const Link = styled(LinkBase)`
    color: black;
`;
