import styled from 'styled-components';
import LinkBase from '../../Components/Core/Link';

export const Header = styled.header`
    display: flex;
    background-color: #373737;
    box-shadow: 0px 0px 3px gray;
    justify-content: space-around;
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    color: white;
`;

export const ContentContainer = styled.div`
    display: flex;
`;

export const ChildrenContainer = styled.div`
    display: block;
    flex: 1 0 auto;
`;

export const Button = styled.button`
    color: white;
    background-color: #373737;
    border: none;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        color: #ccc;
    }
`;

export const Link = styled(LinkBase)`
    color: white;
    background-color: #373737;
    border: none;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    align-self: center;
    padding: 10px 6px;

    &:hover {
        color: #ccc;
    }
`;

export const Footer = styled.footer``;
