import styled from 'styled-components';
import LinkBase from '../../Components/Link';

export const Header = styled.header`
    display: flex;
    background-color: var(--dark);
    justify-content: space-between;
    padding: 0 5px;
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    color: white;
`;

export const Division = styled.div`
    display: flex;
`;

export const Main = styled.main`
    display: flex;
    height: calc(100vh - 43px);
`;

export const Link = styled(LinkBase)`
    color: white;
    border: none;
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    align-self: center;
    padding: 10px 6px;

    :hover {
        color: #ccc;
    }
`;

export const LogoLink = styled(Link)`
    padding: 0;
`;
