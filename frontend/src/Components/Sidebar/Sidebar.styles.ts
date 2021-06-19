import styled from 'styled-components';
import LinkBase from '../Link';

type containerProps = {
    open: boolean;
};

export const Container = styled.nav<containerProps>`
    height: calc(100vh - 43px);
    overflow: hidden;
    transition: width 0.6s ease;
    flex: 0 0 auto;
    width: ${({ open }) => (open ? '300' : '0')}px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 2px;
        z-index: 1;
    }
    white-space: nowrap;
`;

export const Link = styled(LinkBase)`
    padding: 20px;
    padding-left: 50px;
    font-size: 20px;
    width: 100%;
    color: black;
`;
