import styled from 'styled-components';
import Link from '../Core/Link';

interface ContainerProps {
    open: boolean;
}

export const Container = styled.div<ContainerProps>`
    height: 100vh;
    box-shadow: 0px 0px 2px;
    overflow: hidden;
    transition: width 0.7s ease;
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
`;

export const CustomLink = styled(Link)`
    padding: 20px;
    padding-left: 50px;
    font-size: 20px;
    width: 100%;
    color: black;
`;
