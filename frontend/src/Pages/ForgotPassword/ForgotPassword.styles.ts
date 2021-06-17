import styled from 'styled-components';
import LinkBase from '../../Components/Link';

export const Container = styled.div`
    display: block;
    flex: 1 0 auto;
    align-self: center;
`;

export const RedirectContainer = styled.div`
    padding: 10px;
    width: 500px;
    margin: 10px auto;
    border: 1px solid gray;
    border-radius: 4px;
`;

export const Link = styled(LinkBase)`
    &:hover {
        text-decoration: underline;
    }
`;
