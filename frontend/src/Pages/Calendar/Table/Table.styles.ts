import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
`;

export const ContainerMobile = styled.div`
    display: flex;
    overflow: hidden;
    flex: 0 1 auto;
`;

export const Content = styled.div`
    flex: 0;
    display: flex;
`;

export const SubContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100vw;
`;
