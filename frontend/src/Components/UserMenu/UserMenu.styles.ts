import styled from 'styled-components';
import LinkBase from '../Core/Link';
import IconBase from '../Core/Icon';

export const Icon = styled(IconBase)`
    padding-right: 15px;
`;

export const Container = styled.nav`
    display: flex;
    position: absolute;
    background-color: white;
    right: 0;
    top: 42px;
    border-radius: 3px;
    border: 1px solid gray;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    padding: 12px 30px;
    cursor: pointer;
    display: flex;
    color: #373737;

    &:hover {
        background-color: var(--lightGrey);
    }
`;

export const Link = styled(LinkBase)`
    color: #373737;
`;
