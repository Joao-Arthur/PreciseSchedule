import styled, { css } from 'styled-components';
import Responsive from '../../Core/Responsive';
import LinkBase from '../Link';

type props = {
    open: boolean;
};

const openContainer = css`
    width: ${Responsive`280px``100%`};
    ${Responsive`border-right: 1px solid lightgray;``background-color: white;`}
`;

const closedContainer = css`
    width: 0px;
    border-right: none;
`;

export const Container = styled.nav<props>`
    overflow: hidden;
    transition: width 0.6s ease;
    flex: 0 0 auto;
    ${({ open }) => (open ? openContainer : closedContainer)};
`;

export const Item = styled.div`
    display: flex;
    cursor: pointer;
    white-space: nowrap;

    :hover {
        background-color: var(--lighterGray);
    }

    :active {
        background-color: var(--lightGray);
    }
`;

export const Link = styled(LinkBase)`
    padding: 18px;
    padding-left: 45px;
    font-size: 20px;
    width: 100%;
    color: black;
`;
