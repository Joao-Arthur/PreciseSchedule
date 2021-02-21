import styled from 'styled-components';
import LinkBase from '../../Components/Core/Link';
import ButtonIcon from '../../Components/Core/ButtonIcon';

export const Header = styled.header`
    display: flex;
    background-color: #373737;
    box-shadow: 0px 0px 3px gray;
    justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    color: white;
`;

export const Main = styled.main`
    display: flex;
`;

export const ChildrenContainer = styled.div`
    display: block;
    flex: 1 0 auto;
`;

export const Hamburguer = styled(ButtonIcon).attrs({
    name: 'hamburguer',
    size: 38,
    color: 'white'
})``;

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

export const Footer = styled.footer`
    text-align: center;
`;
