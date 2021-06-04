import styled from 'styled-components';

type containerProps = {
    open: boolean;
};

export const Container = styled.nav<containerProps>`
    height: calc(100vh - 43px);
    box-shadow: 0px 0px 2px;
    overflow: hidden;
    transition: width 0.6s ease;
    flex: 0 0 auto;
    width: ${({ open }) => (open ? '500' : '0')}px;
`;

export const Title = styled.h3`
    text-align: center;
`;
