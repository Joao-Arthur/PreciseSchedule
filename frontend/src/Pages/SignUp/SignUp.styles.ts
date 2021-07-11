import styled from 'styled-components';
import LinkBase from '../../Components/Link';
import Responsive from '../../Core/Responsive';

export const Container = styled.div`
    display: block;
    flex: 1 0 auto;
    align-self: center;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const RedirectContainer = styled.div`
    padding: 10px;
    width: ${Responsive`500px``80%`};
    margin: 10px auto;
    border: 1px solid gray;
    border-radius: 4px;
`;

export const Link = styled(LinkBase)`
    :hover {
        text-decoration: underline;
    }
`;
