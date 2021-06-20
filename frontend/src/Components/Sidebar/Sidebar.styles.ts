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

    ${({ open }) =>
        open
            ? `
        width: 300px;
        border-right: 1px solid lightgray;
    `
            : `
        width: 0px;
        border-right: none;
    `}
`;

export const Item = styled.div`
    display: flex;
    cursor: pointer;
    white-space: nowrap;

    :hover {
        background-color: var(--lightGray);
    }
`;

export const Link = styled(LinkBase)`
    padding: 20px;
    padding-left: 50px;
    font-size: 20px;
    width: 100%;
    color: black;
`;
