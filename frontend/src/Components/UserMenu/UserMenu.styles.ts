import styled from 'styled-components';
import LinkBase from '../Link';
import IconBase from '../Icon';

export const Icon = styled(IconBase)`
    padding-right: 18px;
`;

export const Container = styled.nav`
    display: flex;
    position: absolute;
    background-color: white;
    right: 1px;
    top: 39px;
    border-radius: 3px;
    border: 1px solid lightgray;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    padding: 12px 28px;
    cursor: pointer;
    display: flex;
    color: #373737;

    :hover {
        background-color: var(--lightGray);
    }
`;

export const Link = styled(LinkBase)`
    color: #373737;
`;
