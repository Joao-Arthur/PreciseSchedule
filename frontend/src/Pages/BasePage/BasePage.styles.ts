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

export const HeaderDivisionStart = styled.div`
    display: flex;
    width: calc(100% / 3);
    justify-content: flex-start;
`;

export const HeaderDivisionCenter = styled.div`
    display: flex;
    width: calc(100% / 3);
    justify-content: center;
`;

export const HeaderDivisionEnd = styled.div`
    display: flex;
    width: calc(100% / 3);
    justify-content: flex-end;
`;

export const Main = styled.main`
    display: flex;
    height: calc(100vh - 43px);
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
